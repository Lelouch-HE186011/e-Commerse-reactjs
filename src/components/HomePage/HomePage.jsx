import Header from "@components/Header/Header.jsx";
import Banner from "@components/Banner/Banner.jsx";
import styles from "./styles.module.scss";

export default function HomePage() {
    const {container} = styles;
    return (
        <div>
            <div className={container}>
                <Header/>
                <Banner/>
            </div>
        </div>
    )
}