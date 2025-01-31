import './HomePage.css'
import ScrollingImage from '../../components/ParalaxImage/ScrollingImage';
import Carousel from '../../components/Carousel/Carousel';
import PopularCard from '../../components/PopularCard/PopularCard';
import CategorySelect from '../../components/CategorySelect/CategorySelect';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategories } from '../../store/slices/generalSlice';
import { fetchCategoryArticlesById, fetchFiltersForCategory } from '../../store/effects/categoryEffects';
import { useNavigate } from 'react-router';
import ZoomingImage from '../../components/Helpers/ZoomingImage/ZoomingImage';


function HomePage() {
    const categories = useSelector(selectCategories);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    function OnCategoryClick(categorieRef) {
        dispatch(fetchCategoryArticlesById(categorieRef))
        dispatch(fetchFiltersForCategory(categorieRef))
        navigate("/browse/" + categorieRef ?? '')
    }

    return (
        <main style={{ position: "relative" }}>

            <ScrollingImage firstParagraphFirstRow='' secondParagraph='' picPositionPixels={-20} backgroundImageSource='https://www.nextpcb.com/uploads/images/202303/20/1679303211-0734-cavktR.jpg'>
                <div className='category-container'>
                    <CategorySelect onCategoryClick={OnCategoryClick} categories={categories}></CategorySelect>
                </div>
                <h1 className='hero-title' >ZeppaElectronika</h1>
                <p className='hero-text'>Sed vel vestibulum dui, in pulvinar elit. Aenean vulputate ante orci, quis maximus diam vehicula malesuada. Ut a turpis efficitur, malesuada nibh a, elementum dolor.</p>
            </ScrollingImage>
            <div style={{ display: "flex", alignItems: "center", flexDirection: "column", width: "100%", justifyContent: "center" }}>
                <h1 style={{ marginBlock: "3rem" }}>Popular Articles</h1>
                <Carousel>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                    <PopularCard article={{ name: 'Intel', description: "asdjkln jkdnbsa jkdbnjk", cost: "500" }}></PopularCard>
                </Carousel>

            </div>
            <div>
                <h1 style={{ marginBlock: "3rem" }}>Popularne Kategorije</h1>
                <Carousel>
                    <ZoomingImage onCategoryClick={OnCategoryClick} text='Merni Instrumenti' src='https://elektroleum.rs/wp-content/uploads/2024/01/universal-multimeter-voltcraft-vc-440-e-2-e1704546584200.webp'></ZoomingImage>
                    <ZoomingImage onCategoryClick={OnCategoryClick} text='Alati i Pribor' src='https://elektroleum.rs/wp-content/uploads/2021/11/ERSA-e1704546708198.jpg'></ZoomingImage>
                    <ZoomingImage src='https://elektroleum.rs/wp-content/uploads/2023/03/Laboratorijsko-napajanje-3.jpg'></ZoomingImage>
                    <ZoomingImage src='https://elektroleum.rs/wp-content/uploads/2022/03/MicroBit-ploca-e1704545783894.png'></ZoomingImage>
                    <ZoomingImage src='https://elektroleum.rs/wp-content/uploads/2024/01/Alat-i-pribor-e1704545849200.jpg'></ZoomingImage>
                </Carousel>
            </div>
            <div>
                <h1 style={{ marginBlock: "3rem" }}>Brendovi</h1>
            </div>
        </main>
    );
}

export default HomePage;