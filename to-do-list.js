/*

* Listeye boş karakter eklenemiyor. Bununla birlikte hiçbir şey yazılmadığında da aynı hatayı veriyor.
* Yazacağınız JavaScript kodu içerisinde element eklemeyi sağlayan bir fonksiyon, element silmeyi sağlayan bir fonksiyon, yapıldı işaretlenmesini sağlayan bir fonksiyon olması gerekiyor.
* Element eklendiğinde ve hata verirken sağ üstte uyarı verdiğini fark etmişsinizdir. Bunu sağlayan Bootstrap Toast bildirimdir. Sayfaya gidip toast nedir nasıl yapılır bunu araştırın ve kodunuza ekleyin.
* Önce ana fonksiyonlar için uğraşın. Yapıldı, toast bildirim bunlar biraz daha işin artistliği. Öncelikli amacını sağlıyor olması lazım.

Bonus:
Yaptığınız yapıya Local Storage'ı da ekleyip verilerin kaybolmamasını sağlayın.

*/

// HTML SAYFASINDAKİ ELEMENTLERİN SEÇİMİ //
let listDOM = document.querySelector("#list")
let btnDOM = document.querySelector("#liveToastBtn")
let taskDOM = document.querySelector("#task")
let UL_LI = document.getElementsByTagName("li") //burda var olan bütün li elementlerini alıp UL_Lİ'ye atadık böylece elimizde kaç tane li olduğunu öğrendik


// ÇARPI BUTONUNUN OLUŞTURULMASI //
for (let i = 0; i < UL_LI.length; i++) {
    let closeButton = document.createElement("span") // yeni bir span elemanı oluşturup ve closeButton değişkenine atadık.
    closeButton.textContent = "\u00D7" // çarpı işareti 
    closeButton.classList.add("close") // butona close class'ını ekledik
    closeButton.onclick = removeButton // çarpı işaretine basınca removeButton fonsiyonunu çalıştırır
    UL_LI[i].append(closeButton) // for döngüsünü kullanarak var olan listeye çarpı butonunu ekledik.
    UL_LI[i].onclick = check; // üzerine tıklayınca check fonksiyonunu çalıştır dedik
}

btnDOM.addEventListener("click", elemanEkle) // butona tıklandığında  elemanEkle fonksiyonu çalışacak

// FONKSİYONLAR //
function removeButton() {
    this.parentElement.remove();  // çarpının bulunduğu maddeyi silmek için parentElement.remove classını kullandık
}

function check() {
    this.classList.toggle("checked"); // toggle switch genelde iki şıklı (evet, hayır veya aktif pasif) gibi durumları belirtmek için kullanılır. burda toggle("checked")'i kullanarak tıklanan maddenin üstünü çiz ve yanına tik işareti koy demiş olduk 
}

// LİSTEYE YENİ ELEMAN EKLEME
function elemanEkle() {
    if (taskDOM.value == "") {
        $(".error").toast("show")
    }
    else {
        $(".success").toast("show")

        let liDOM = document.createElement("li") // yeni li elementi yaratıp liDOM'a atadık
        listDOM.appendChild(liDOM) // liDOM değişkeninin her seferinde mevcut listenin en sonuna eklenmesi gerektiğini tanımladık 
        liDOM.innerHTML = task.value // girilen değerlerin ekranda görünmesini sağladık
        taskDOM.value = "" // listeye eklendikten sonra içini temizler 

        //SONRADAN EKLENEN MADDELERİ SİLMEK İÇİN AYNI İŞLEMLERİN TEKRARI
        liDOM.onclick = check

        let closeButton = document.createElement("span")
        closeButton.textContent = "\u00D7" // çarpı işareti 
        closeButton.classList.add("close") // butona close class'ını ekledik
        closeButton.onclick = removeButton // çarpı işaretine basınca removeButton fonsiyonunu çalıştırır

        liDOM.append(closeButton)
        listDOM.append(liDOM)
        inputElement.value = ("")
    }
}