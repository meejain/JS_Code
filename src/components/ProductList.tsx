import { faShoppingCart, faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProductList = () => {
    return <div className="container">
        <div className="row">
            <div className='col-md-4'>
            <div className="item">
                <div className="mb-r">
                    <div className="card card-cascade wider">
                        <a>
                            <div className="view overlay hm-white-slight">
                                <img src="images/nokia8-1.jpg" className="img-fluid" alt="" width="360px" height="640px" />
                            </div>
                        </a>
                        <div className="card-body text-center no-padding">
                            <p className="card-title">
                                <strong>
                                    <a>Product Name</a>
                                </strong>
                            </p>
                            <p className="card-text">Product Description</p>
                            <div className="card-footer">
                                <span className="left">₹ 10000.00</span>
                                <span className="right px-2">
                                    <a>
                                    <FontAwesomeIcon icon={faHeart} color="red" className='px-3'/>
                                    <FontAwesomeIcon icon={faShoppingCart} color="blue"/>
                                    </a>
                                </span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
}

export default ProductList;