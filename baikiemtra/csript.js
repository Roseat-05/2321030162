var danhSachVid = [
        {
            id: 1,
            ten: "Tổng hợp nhạc trung",
            duongDanAnh: "nhactrung.avif",
            duongDanYoutube:"https://www.youtube.com/embed/Ah799OJydZE?si=4v7ZWIJSV9G55C9B"
        },
        {
            id: 2,
            ten: "Giờ phiêu lưu",
            duongDanAnh: "giophieuluu.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/Ah799OJydZE?si=4v7ZWIJSV9G55C9B"

        },
        {
            id: 3,
            ten: "Nơi Này Có Anh",
            duongDanAnh: "noinaycoanh.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/FN7ALfpGxiI?si=t57J9hXJTYrGOknW"

        },
        {
            id: 4,
            ten: "Nắng Ấm Xa Dần",
            duongDanAnh: "nangamxadan.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/0HBX281CWlY?si=tFZgmr_YtnOwdRHq"

        },
        {
            id: 5,
            ten: "Ấn Nút Nhớ Thả Giấc Mơ",
            duongDanAnh: "annutnho.jpg",
            duongDanYoutube:"https://www.youtube.com/embed/2jeqQ6Py-o8?si=KLxyN_agv0iVzKgi"

        },
    ];

    function chonPhim(id){
        for (let i= 0; i < danhSachVid.length; i++){
            if(danhSachVid[i].id ==id){
                document.getElementsByClassName("video")[0].src =danhSachVid[i].duongDanYoutube
            }
        }

    }