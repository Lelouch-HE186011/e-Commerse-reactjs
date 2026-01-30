import styles from '../styles.module.scss';
import fbIcon from '@icon/svgs/fb-icon.svg';
import insIcon from '@icon/svgs/insta-icon.svg';
import ytbIcon from '@icon/svgs/youtube-icon.svg';



export default function BoxIcon({type, href}) {
    const {boxIcon} = styles;

    const handleRenderIcon = (type) => {
        switch (type) {
            case 'fb':
                return fbIcon;
            case 'ins':
                return insIcon;
            case 'ytb':
                return ytbIcon;
            default:
                return null;
        }
    }

    const handleClick = () => {
        window.open(href, '_blank');
    };

    return (
        <div className={boxIcon} onClick={handleClick}>
            <img src={handleRenderIcon(type)} alt={type}/>
        </div>

    )
}