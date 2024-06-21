function OpenNav() {
    document.getElementById("Nav").style.width = "300px";
}
function CloseNav() {
    document.getElementById("Nav").style.width = "0";
}
function url() {
    location.href = "https://www.hay88.one/?inviteCode=6130571";
}

const header = document.querySelector("#header")
function headContent() {
    const head = document.createElement("div")
    head.innerHTML = `
        <div class="bg-[#221919] z-50 fixed top-0 w-full">
            <div class="max-w-6xl m-auto flex-col md:flex-row flex justify-between items-center relative">
                <div class= "absolute left-2 text-sky-800 py-5 md:hidden text-4xl ">
                    <ion-icon onclick="OpenNav()" name="menu-outline"></ion-icon>
                </div>
                <a href="/index.html">
                    <div class="logo w-[248px] sm:w-[288px] py-2">
                        <img src="/image/logo.png" alt="">
                    </div>
                </a>
                <div class=" bg-[#BA875B] bg-opacity-80 md:bg-transparent py-2 mt-1.5 md:mt-0 flex justify-center items-center *:px-3.5 *:py-1 flex gap-3 w-full md:w-auto *:rounded-lg">
                    <button onclick="url()"  class="bg-yellow-500 text-gray-700 border-2 border-gray-400 hover:bg-gray-300 shadow-md shadow-gray-400/60">ĐĂNG KÝ</button>
                    <button onclick="url()"  class="bg-[#BA875B] text-[#F1CD03] border-2 border-yellow-500 md:bg-black hover:bg-gray-300 hover:text-yellow-700 shadow-md shadow-yellow-500/60">ĐĂNG NHẬP</button>
                </div>
            </div>
            <div class="bg-[#BA875B] w-full">
                <div class="max-w-6xl m-auto">
                    <nav id="Nav"  class="fixed top-0 max-w-6xl h-full w-0 m-0 p-0 duration-500 overflow-hidden md:relative md:w-auto">
                        <div class="absolute top-3 right-3 text-4xl text-sky-800 md:hidden">
                            <ion-icon onclick="CloseNav()" name="close-outline"></ion-icon>
                        </div>
                        <ul class="bg-white md:bg-transparent md:flex gap-7 items-center md:w-auto h-full pt-12 md:pt-0 *:px-3 md:*:px-0 *:py-3 text-gray-500 md:text-[#FFFFFF] font-[600] md:font-[500] divide-y divide-solid md:divide-none *:duration-300">
                            <li class="hover:text-yellow-300"><a href="/index.html">HOME</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//khuyenmai/khuyenmai.html">KHUYẾN MÃI</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//Ruttien/Ruttien.html">RÚT TIỀN</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//Naptien/Naptien.html">NẠP TIỀN</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//Dangky/Dangky.html">ĐĂNG KÝ</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//Taiapp/Taiapp.html">TẢI APP</a></li>
                            <li class="hover:text-yellow-300"><a href="/instruct//Lienhe/Lienhe.html">LIÊN HỆ</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>`;
    header.appendChild(head)
}
headContent()



//======== footer ========
const footer = document.querySelector(".footer");
function footItem() {
    const item = document.createElement("div");
    item.innerHTML = `
        <section class="bg-[#373737] mt-5 py-10 px-5">
            <div class=" text-white *:text-lg max-w-6xl m-auto flex-col md:flex-row *:w-full md:w-auto flex justify-between">
                <div class="">
                    <div class="max-w-[248px]">
                        <a href="/index.html"><img src="/image/logo.png"></a>
                    </div>
                    <strong class="mt-5 block">Brand: <a class="text-yellow-600" href=""> VX88.BET</a></strong>
                    <p class="py-5">Địa Chỉ: 122 Đỗ Hành, Phú Thuỷ, Thành phố Phan Thiết, Bình Thuận, Việt Nam</p>
                    <p>Website: https://vx88.bet/ </p>
                </div>
                <div class="pl-2 md:pl-10">
                    <h1 class="text-xl">TRÒ CHƠI VX88</h1>
                    <ul class="mt-5 list-disc *:pb-2 pl-5 md:pl-4">
                        <li>Casino</li>
                        <li>Thể Thao</li>
                        <li>Đá Gà</li>
                        <li>Xổ Số</li>
                        <li>Bắn Cá</li>
                        <li>Esport</li>
                    </ul>
                </div>
                <div class="pl-2 md:pl-10 pt-3 md:pt-0">
                    <h1 class="text-xl">LIÊN HỆ CHÚNG TÔI</h1>
                    <ul class="mt-5 list-disc *:pb-2 pl-5 md:pl-4 ">
                        <li><a class="text-yellow-600 hover:text-[#FAAE2F]" href="/instruct/Vechung/Vechung.html">Về Chúng Tôi</a></li>
                        <li><a class="text-yellow-600 hover:text-[#FAAE2F]" href="/instruct//Chinh/Chinh.html">Chính Sách Bảo Mật</a></li>
                        <li><a class="text-yellow-600 hover:text-[#FAAE2F]" href="/instruct//Dieu/Dieu.html">Điều Khoản Và Điều Kiện</a></li>
                        <li><a class="text-yellow-600 hover:text-[#FAAE2F]" href="/instruct//Dieu/Dieu.html">Miễn Trừ Trách Nhiệm</a></li>
                        <li><a class="text-yellow-600 hover:text-[#FAAE2F]" href="/instruct//Lienhe/Lienhe.html">Liên hệ</a></li>
                    </ul>
                </div>
            </div>
        </section>`
    footer.appendChild(item)
}
footItem();