import React from 'react'

export default function TinTuc() {
  return (
    <>
            <div className="container mt-3 mb-1">
        <div className="row justify-content-center ">
            <div className="col-12 col-sm-9">
                <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item tabcolor" role="presentation">
                        <a className="nav-link active" id="pills-news-tab" data-toggle="pill" href="#pills-news" role="tab" aria-controls="pills-news" aria-selected="true">Tin Tức</a>
                    </li>
                    <li className="nav-item tabcolor" role="presentation">
                        <a className="nav-link" id="pills-endow-tab" data-toggle="pill" href="#pills-endow" role="tab" aria-controls="pills-endow" aria-selected="false">Mã Khuyến Mãi</a>
                    </li>
                </ul>
                
            </div>
        </div>
    </div>
    <div className="tab-content" id="pills-tabContent">

        <div className="tab-pane fade show active" id="pills-news" role="tabpanel" aria-labelledby="pills-news-tab">
            <div className="container mb-5">
                <div className="row">
                    <div className="col-12 text-center headreview">
                        <h1>TIN TỨC</h1>
                    </div>
                </div>
                <div className="row justify-content-center contenttt">
                    <div className="col-12 text-center my-3">
                        <h4>CONVERSE PEACE LÊN KỆ CÙNG NIỀM TIN MANG NHỮNG ĐIỀU BÌNH DỊ TRỞ LẠI</h4>
                    </div>
                    <div className="col-11 mb-3">
                        (03/07/2020)
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt1.jpg" alt="" className="w-100"/>
                        <p className="my-5">Tiếp nối Brand Campaign của mùa hè năm 2019, Converse lại tiếp tục tái hiện lại thông điệp “Seek Peace” với một phiên bản thực tế hơn, ý nghĩa hơn khi “Seek Peace” được chuyển đổi thành “Create Together For Peace” với sự đồng kiến tạo đến từ một cộng đồng, một tập thể, cùng với một niềm tin – Chúng ta có thể cùng hi vọng!</p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt2.jpg" alt="" className="w-100"/>
                        <p className="my-5">Tuy Việt Nam hiện tại đã ngưng giãn cách và dần quay trở lại sự bình ổn vốn có nhưng đâu đó cũng vẫn còn những điều khá tệ đang diễn ra và tồn tại, và chúng ta không hề ngừng hi vọng rằng thời gian khó khăn này sẽ sớm kết thúc hẳn không chỉ riêng Việt Nam mà còn ở các nước trên thế giới. Từ đó có thể thấy, thông điệp này, sự hi vọng này chúng ta vẫn nên cùng nhau tiếp tục duy trì và mở rộng.
                        </p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt3.jpg" alt="" className="w-100 mb-3"/>
                        <img src="./assets/Img/Assets/tt4.jpg" alt="" className="w-100"/>
                        <p className="my-5">Tuy Việt Nam hiện tại đã ngưng giãn cách và dần quay trở lại sự bình ổn vốn có nhưng đâu đó cũng vẫn còn những điều khá tệ đang diễn ra và tồn tại, và chúng ta không hề ngừng hi vọng rằng thời gian khó khăn này sẽ sớm kết thúc hẳn không chỉ riêng Việt Nam mà còn ở các nước trên thế giới. Từ đó có thể thấy, thông điệp này, sự hi vọng này chúng ta vẫn nên cùng nhau tiếp tục duy trì và mở rộng.
                        </p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt5.jpg" alt="" className="w-100"/>
                        <p className="my-5">Converse Peace là bộ sưu tập được thiết kế trên 2 hình thể huyền thoại của nhà Converse : Chuck Taylor và Chuck 70. Một điều nữa là bộ sưu tập này được thiết kế lồng ghép từ biểu tượng PEACE theo màu sắc và kiểu mẫu xu hướng của những năm 70, hướng đến sự kiên trì với thông điệp cộng đồng và sự tích cực của chiến dịch “Create At Home – Create Together For Peace” SU20.
                        </p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt6.jpg" alt="" className="w-100"/>
                        <p className="my-1 text-center"><i>Chuck 70 – Key Visual chính của chiến dịch</i></p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt7.jpg" alt="" className="w-100"/>
                        <p className="my-4 text-center"><i>Phiên bản Peace Low-top (Cổ thấp) sở hữu upper gắn liền với graphic lấy từ màu sắc và font của những năm 70</i></p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt8.jpg" alt="" className="w-100 mb-3"/>
                        <img src="./assets/Img/Assets/tt9.jpg" alt="" className="w-100"/>
                        <p className="my-4 text-center"><i>Bên cạnh Key Visual Chuck 70 thì Chuck Taylor All Star High-top (Cổ cao) không đơn giản như vậy. Chúng còn được bồi đắp thêm 1 cú “twist” bằng loại Vecro logo ở cổ giày có thể tháo rời.</i></p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt10.jpg" alt="" className="w-100"/>
                        <p className="my-4 text-center"><i>Biểu tượng PEACE ở hai bên cổ giày có thể tháo rời. Chính xác chúng là phiên bản dành cho những ai thích “lắp ráp” vì người mang có thể ráp bất kì miếng Patch nào trên đây.</i></p>
                    </div>
                    <div className="col-11">
                        <img src="./assets/Img/Assets/tt11.jpg" alt="" className="w-100"/>
                        <p className="mt-1 mb-5">BST Peace sẽ được lên kệ từ ngày 4.07.2020 tại các cửa hàng Giày Đỉnh Cao VN trong hệ thống các bạn nhé.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="tab-pane fade" id="pills-endow" role="tabpanel" aria-labelledby="pills-endow-tab">
            <div className="container-fluid mb-5">
                <div className="row justify-content-center">
                    <div className="col-12 text-center headreview">
                        <h1>MÃ KHUYẾN MÃI</h1>

                    </div>
                    <div className="container">
                        <table className="table table-striped table-sm table-hover">
                            <thead>
                                <tr>
                                    <th scope="col">Mã</th>
                                    <th scope="col">Nội dung</th>
                                    <th scope="col">Thời hạn</th>
                                    <th scope="col">Copy</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row"><input type="text" className="form-control disabled" value="50BUPTO20" id="MGG1" disabled/></th>
                                    <td>Giảm giá 20% cho đơn hàng trên 50 tỷ</td>
                                    <td>20 Năm</td>
                                    <td><button className="btn btn-success" onclick="CopyFunction1()">Copy</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="text" className="form-control disabled" value="1507SALE70" id="MGG2" disabled/></th>
                                    <td>Ngày 15/7 Giảm giá 70% mọi đơn hàng dưới 10k</td>
                                    <td>00h01m 15/7/2020</td>
                                    <td><button className="btn btn-success" onclick="CopyFunction2()">Copy</button></td>
                                </tr>
                                <tr>
                                    <th scope="row"><input type="text" className="form-control disabled" value="MP40" id="MGG3" disabled/></th>
                                    <td>Áp dụng cho đơn hàng trên 1Tr</td>
                                    <td>Free Ship</td>
                                    <td><button className="btn btn-success" onclick="CopyFunction3()">Copy</button></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
    </div>

    
    </>
  )
}
