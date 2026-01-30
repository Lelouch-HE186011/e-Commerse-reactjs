import Layout from "@components/Layout/Layout.jsx";
import {dataInfo} from "./constants.js";
import InfoCard from "@components/Info/InfoCart.jsx";
import styles from './styles.module.scss';

export default function Info() {
    const {container} = styles;

    return (
       <div >
           <Layout>
               <div className={container}>
                   {dataInfo.map((item) => {
                       return <InfoCard content={item.title} description={item.description} src={item.src} />;
                   })}
               </div>
           </Layout>
       </div>
    )
}