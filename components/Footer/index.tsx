import { Typography } from 'antd';
const { Title } = Typography;

import styles from './Footer.module.css'

const Footer = () => {
        return (
                <div className={styles.headerDiv}>
                        <Title level={2}>Footer</Title>
                </div>

        )
}

export default Footer
