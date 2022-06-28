import React from 'react'
import ReactPlayer from 'react-player'

export default function About() {
  return (
    <>
        <div className="embed-responsive embed-responsive-16by9 my-4">
        <ReactPlayer url='https://www.youtube.com/watch?v=6X_n8IGpW4g' />
    </div>
    <div className="container-fluid">
        <div className="row text-center mt-5">
            <div className="us">
            <div className="chungtoi">
                <h1 className='about'>CHÚNG TÔI LÀ AI?</h1>
                <p>In's Store - Saigon Sneaker là cửa hàng chuyên cung cấp và phân phối những đôi Sneaker chính hãng và mang giá trị chất lượng cao cho người sử dụng. Hãy mau đến In's Store để trải nghiệm những siêu phẩm đó nha cả nhà!!! Chắc chắn In's Store sẽ là người bạn đồng hành đáng tin cậy của mọi người, mọi nhà.</p>
            </div>
            <div className="chungtoi">
                <h1 className='about'>SỨ MỆNH</h1>
                <p>In's Store sẽ ở đây và sẽ luôn ở đây khi bạn cần. Chu đáo, ân cần và uy tín là những điều mà nhà In's Store luôn hướng đến trong quá trình phục vụ quý khách hàng.</p>
            </div>
            </div>
        </div>
        <div className="logo">
            <div className="image col-12 col-sm-12 col-md-6 col-lg-6 order-md-2 order-1 imgsumenh">
                <img src="./assets/Img/Assets/Logo.png" alt=""/>
            </div>
        </div>
    </div>
    </>
  )
}
