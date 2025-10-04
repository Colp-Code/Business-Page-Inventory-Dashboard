import './home.css';
import { Button } from '../../components/aodesu/button';

export default function Home() {
    return (
        <>
            <div className='body'>
                <div className="header">
                    <div className='header_first'>
                        <h1>Build your inventory with ###### :)</h1>
                        <span>We are tools that will help you build inventory easy and intuitive</span>
                    </div>
                    <Button size="big" variant="contained" color="contrast">Start inventory</Button>
                    <div className='header_second'>
                        <h3>We have many tools that help you create a useful and practical inventory.</h3>
                        <div className='body_sample'>
                            <div className='sample'>

                            </div>
                            <div className='sample'>

                            </div>
                        </div>
                    </div>
                    <h3 className='h3_last'>And much more coming soon.</h3>
                    <footer>
                    <div className='footer_body'>
                        <div>
                            <h4>Social</h4>
                            <ul>
                                <li>
                                    <a href="http://#">GitHub</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Recourse</h4>
                            <ul>
                                <li>
                                    SOON!
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Company</h4>
                            <ul>
                                <li>
                                    Vandlee
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h4>Products</h4>
                            <ul>
                                <li>
                                    SOON!
                                </li>
                            </ul>
                        </div>
                    </div>
                </footer>
                </div>
                
            </div>
            
        </>
    )
}
