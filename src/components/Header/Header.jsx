import BoxIcon from "@components/Header/BoxIcon/BoxIcon.jsx";
import {dataBoxIcon, dataMenu} from "@components/Header/constants.js";
import styles from "./styles.module.scss";
import Menu from "@components/Header/Menu/Menu.jsx";
import Logo from '@icon/images/Logo-retina.png';
import reloadIcon from '@icon/svgs/reload-icon.svg';
import heartIcon from '@icon/svgs/heart.svg';
import cartIcon from '@icon/svgs/cart-icon.svg';

export default function Header() {
    const {containerBoxIcon, containerBox, containerMenu, containerHeader, container, logoWrapper} = styles;

    return (
        <div className={container}>
            <div className={containerHeader}>
                <div className={containerBox}>
                    <div className={containerBoxIcon}>
                        {
                            dataBoxIcon.map((item) => {
                                return <BoxIcon type={item.type} href={item.href} />;
                            })
                        }
                    </div>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(0, 3).map((item) => {
                                return<Menu content={item.content} href={item.href} />;
                            })
                        }
                    </div>
                </div>
                <div className={logoWrapper}>
                    <img src={Logo} alt="Logo" style={{
                        width: '153px',
                        height: '53px'

                    }}/>
                </div>
                <div className={containerBox}>
                    <div className={containerMenu}>
                        {
                            dataMenu.slice(3, 6).map((item) => {
                                return<Menu content={item.content} href={item.href} />;
                            })
                        }
                    </div>

                    <div className={containerBoxIcon} >
                        <img src={reloadIcon} alt="reloadIcon"/>
                        <img src={heartIcon} alt="heartIcon"/>
                        <img src={cartIcon} alt="cartIcon"/>
                    </div>
                </div>
            </div>
        </div>

    )
}