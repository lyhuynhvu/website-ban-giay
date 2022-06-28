import React from 'react'

export default function Detail() {
  return (
    <>
	<div className="product-detail">
		<div className="container">
			<div className="row justify-content-center">
                <div className="col-md-6 col-sm-10 col-12 text-center my-3">
                    <div className="product-detail-left float-left 	">

                        <div className="sp-wrap">
                            <a href="./assets/Img/Giay/Hunterx1.jpg"><img src="./assets/Img/Giay/Hunterx1.jpg" alt=""/></a>
                            
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12 col-12 my-3">
                    <div className="product-detail-right float-left">
                        <h4>Giày Thể Thao Nam Biti's Hunter X </h4>
                        <small>Mã sản phẩm: DSMH02200DEN39</small>
                        <div className="d-flex justify-content-between">
                            <p style={{color: 'rgb(250, 0, 0)', fontSize: '20px'}}>999.000 <u>đ</u></p>
                            <small><i>*Đã bao gồm VAT</i></small>
                        </div>
                        <hr style={{marginTop: '-10px'}} />
                        <p>Màu Sắc : Đen</p> 
                        <div className="d-flex jutify-content-start kichthuoc">
                            <p>Kích Thước</p>

                            <div className="size-container">
                                <div className="sizes">
                                    <span className="size">7</span>
                                    <span className="size">8</span>
                                    <span className="size active">9</span>
                                    <span className="size">10</span>
                                    <span className="size">11</span>
                                </div>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between btn-end">
                            <button className="btn btn-primary"><i className="fas fa-shopping-cart"></i> Mua Ngay </button>
                            <button className="btn btn-danger" onclick="window.location.href='#comments'"><i className="fas fa-pencil-alt"></i> Viết Đánh Giá</button>
                        </div>
                        <hr/>
                        <p><i className="fas fa-box"></i> MIỄN PHÍ GIAO HÀNG TOÀN QUỐC</p>
                        <p><i className="fas fa-box-open"></i> ĐỔI TRẢ DỄ DÀNG</p>
                        <p><i className="fas fa-phone"></i> TỔNG ĐÀI BÁN HÀNG 0332148505 (Từ 8h30 - 21:30 mỗi ngày)</p>
                        <hr/>
                        <div className="d-flex justify-content-center">
                            <div className="fb-like mr-1" data-href="http://www.sict.work/Bitis-Hunter-X.html" data-width="" data-layout="button_count" data-action="like" data-size="large" data-share="true"></div> 
                            <div className="fb-save" data-uri="http://sict.work/Bitis-Hunter-X.html" data-size="large"></div>
                        </div>
                    </div>
                </div>
            </div>
		</div>
	</div>

    <div className="container my-5">
        <h3 className="text-center">MÔ TẢ SẢN PHẨM</h3>
        <hr width="80%"/>
        <div className="row justify-content-center">
            <div className="col-10">                
                <p> <i className="fas fa-check"></i>Giày thể thao thời trang Bitis Hunter X được thiết kế form đẹp, trẻ trung nên rất phù hợp cho mọi dịp,đi học, đi chơi, đi tiệc đều rất thoải mái.</p>
                <p> <i className="fas fa-check"></i> Kiểu dáng tinh tế, hợp xu hướng của những đôi giày cao cấp nam nữ.</p>
                <p> <i className="fas fa-check"></i> Được thiết kế trẻ trung, là một thiết kế dành cho phái mạnh.</p>
                <p> <i className="fas fa-check"></i> Giày Fila chú trọng phom dáng với từng đường nét mạnh mẽ, làm toát lên vẻ trẻ trung, thanh lịch. </p>
                <p> <i className="fas fa-check"></i> Đường may tỉ mỉ và đường keo dán chắc chắn và bền bỉ trong thời gian dài.</p>
                <p> <i className="fas fa-check"></i> Sự kết hợp hoàn hảo với những bộ trang phục đủ mọi phong cách.</p>
                <p> <i className="fas fa-phone"></i> Liên hệ shop: 0332148505</p>
                <p> <i className="fas fa-globe-asia"></i> Web: http://sict.work</p>
            </div>
            <div className="col-12 text-center">
                <h3 id="comments">Đánh Giá</h3>
                <hr width="80%"/>
                <div className="fb-comments w-100" data-href="http://sict.work" data-numposts="5" data-width="100%"></div>
            </div>
        </div>
        
        <h3 className="text-center">SẢN PHẨM GỢI Ý</h3>
        <hr width="80%"/>
    </div>
    </>
  )
}
