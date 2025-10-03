import './home.css';
import { Button } from '../../components/aodesu/button';

export default function Home() {
    return (
        <>
            <div className='body'>
                <div className="header">
                    <h1>Build your inventory with ###### :)e</h1>
                    <p>We are tools that will help you build inventory easy and intuitive</p>
                    <Button variant="contained" color="contrast">Start inventory</Button>
                    <h3>We have many tools that help you create a useful and practical inventory.</h3>
                    <div className='body_sample'>
                        <div className='sample'>

                        </div>
                        <div className='sample'>

                        </div>
                    </div>
                    <h3>And much more coming soon.</h3>
                </div>
                <footer>
                        <div className='fooder_clas'>
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
                </footer>
            </div>
            
        </>
    )
}
