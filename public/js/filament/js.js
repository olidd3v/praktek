$(function () {

  const WA_NUMBER = "6285749484188";

  $("#yearNow").text(new Date().getFullYear());

  /* ===========================================================
     1. DATA
  =========================================================== */
  const philosophyItems = [
    { title: "Lingkaran Biru", desc: "Persatuan, kepercayaan, keteguhan, dan perlindungan bagi pekerja migran.", icon: "fa-circle", color: "blue" },
    { title: "Roda Gigi Merah", desc: "Semangat kerja, keberanian, dan perjuangan pekerja migran.", icon: "fa-gear", color: "red" },
    { title: "Roda Gigi Hijau", desc: "Produktivitas, pemberdayaan, dan gerakan bersama untuk kesejahteraan PMI.", icon: "fa-gear", color: "green" },
    { title: "Tangan Kuning", desc: "Kerja sama, kemitraan, solidaritas, dan pendampingan bersama PMI.", icon: "fa-handshake", color: "yellow" },
    { title: "Dua Tangan Biru", desc: "Keberanian, kekuatan, kepedulian, dan komitmen memperjuangkan hak PMI.", icon: "fa-hands", color: "blue" },
    { title: "Warna Hijau", desc: "Harapan, pertumbuhan, kesejahteraan, dan masa depan yang lebih baik.", icon: "fa-seedling", color: "green" },
    { title: "Warna Kuning / Emas", desc: "Kemuliaan, optimisme, dan penghargaan atas perjuangan PMI.", icon: "fa-medal", color: "yellow" },
    { title: "Identitas YPPM", desc: "Singkatan yang mudah dikenali dan kuat untuk kegiatan organisasi.", icon: "fa-id-badge", color: "red" }
  ];

  const misiItems = [
    "Memberikan edukasi kepada masyarakat mengenai prosedur bekerja ke luar negeri secara legal.",
    "Mencegah praktik calo, sponsor ilegal, dan TPPO.",
    "Memberikan pendampingan hukum, sosial, dan psikologis kepada PMI.",
    "Meningkatkan kompetensi calon PMI melalui pelatihan dan pembinaan.",
    "Memberdayakan PMI purna melalui program kewirausahaan dan pengembangan ekonomi.",
    "Menjalin kemitraan dengan pemerintah, dunia usaha, perguruan tinggi, dan organisasi masyarakat.",
    "Mendukung program nasional dalam meningkatkan kualitas pelindungan Pekerja Migran Indonesia."
  ];

  const tujuanItems = [
    { text: "Meningkatkan kualitas pelindungan PMI", icon: "fa-shield-halved" },
    { text: "Mengurangi jumlah PMI nonprosedural", icon: "fa-arrow-trend-down" },
    { text: "Meningkatkan kesejahteraan PMI & keluarga", icon: "fa-hand-holding-heart" },
    { text: "Menjadi pusat informasi & konsultasi PMI", icon: "fa-circle-info" },
    { text: "Mendukung kualitas SDM Indonesia", icon: "fa-user-graduate" }
  ];

  const programUnggulan = [
    { title: "Sosialisasi Migrasi Aman", desc: "Memberikan edukasi mengenai prosedur resmi bekerja di luar negeri.", icon: "fa-bullhorn" },
    { title: "Gerakan Berantas Calo PMI", desc: "Kampanye pencegahan perekrutan ilegal dan sponsor tidak resmi.", icon: "fa-ban" },
    { title: "Posko Pengaduan PMI", desc: "Pelayanan konsultasi dan pendampingan bagi calon PMI, PMI, dan keluarganya.", icon: "fa-headset" },
    { title: "Pendampingan Hukum", desc: "Pendampingan penyelesaian permasalahan PMI melalui koordinasi dengan instansi terkait.", icon: "fa-scale-balanced" },
    { title: "Mitra Psikolog PMI", desc: "Pelayanan konseling dan pendampingan psikologis bagi PMI dan keluarga.", icon: "fa-brain" },
    { title: "Pemberdayaan PMI Purna", desc: "Pelatihan kewirausahaan, UMKM, dan literasi keuangan.", icon: "fa-seedling" },
    { title: "Edukasi Desa Migran", desc: "Pembentukan desa sadar migrasi aman melalui sosialisasi dan pelatihan masyarakat.", icon: "fa-house-flag" }
  ];

  const peduliItems = [
    { title: "YPPM Edukasi", sub: "Migrasi Aman & Hak PMI", icon: "fa-graduation-cap" },
    { title: "YPPM Pendampingan", sub: "Konsultasi & Pengaduan", icon: "fa-headset" },
    { title: "YPPM Anti-TPPO", sub: "Pencegahan Perekrutan Ilegal", icon: "fa-ban" },
    { title: "YPPM Berdaya", sub: "Pemberdayaan PMI & Keluarga", icon: "fa-seedling" },
    { title: "YPPM Bersinergi", sub: "Kemitraan & Jaringan Perlindungan", icon: "fa-diagram-project" }
  ];

  const workplanItems = [
    { title: "Edukasi & Sosialisasi Migrasi Aman", points: ["Sosialisasi hak dan kewajiban CPMI/PMI.", "Edukasi prosedur penempatan kerja luar negeri yang resmi.", "Penyuluhan bahaya calo, penipuan, dan penempatan nonprosedural.", "Sosialisasi pencegahan TPPO."] },
    { title: "Pos Konsultasi & Pendampingan CPMI/PMI", points: ["Membuka layanan konsultasi bagi CPMI dan keluarga.", "Pendampingan permasalahan dokumen dan proses penempatan.", "Pendampingan PMI yang mengalami persoalan selama bekerja di luar negeri.", "Membantu mengarahkan masyarakat kepada instansi/lembaga yang berwenang."] },
    { title: "Perlindungan Pekerja Migran", points: ["Menerima pengaduan dan melakukan pendampingan awal.", "Membantu korban mendapatkan akses layanan hukum dan perlindungan.", "Membangun jaringan dengan pemerintah, aparat penegak hukum, dan lembaga terkait."] },
    { title: "Pencegahan TPPO & Penempatan Nonprosedural", points: ["Kampanye anti-TPPO di desa dan masyarakat.", "Edukasi mengenai modus perekrutan ilegal.", "Pendataan dan pemetaan potensi kerawanan perekrutan.", "Mendorong masyarakat menggunakan jalur penempatan resmi."] },
    { title: "Pemberdayaan Purna PMI & Keluarga", points: ["Pelatihan kewirausahaan.", "Pendampingan usaha produktif.", "Edukasi pengelolaan keuangan dan hasil kerja di luar negeri.", "Pengembangan UMKM keluarga PMI."] },
    { title: "Pusat Informasi Kerja Luar Negeri", points: ["Memberikan informasi mengenai peluang kerja luar negeri.", "Edukasi negara tujuan, jenis pekerjaan, persyaratan, dan proses resmi.", "Membantu masyarakat membedakan informasi lowongan resmi dan tidak resmi."] },
    { title: "Pendampingan Psikososial", points: ["Menyediakan akses konsultasi psikologis melalui mitra profesional.", "Pendampingan keluarga PMI yang menghadapi masalah sosial.", "Dukungan reintegrasi bagi PMI yang kembali ke Indonesia."] },
    { title: "Penguatan Organisasi & Relawan", points: ["Membentuk jaringan pengurus/relawan YPPM di daerah.", "Pelatihan kapasitas pendamping.", "Rapat koordinasi rutin.", "Penyusunan SOP pelayanan dan pendampingan."] },
    { title: "Kerja Sama & Kemitraan", points: ["Membangun sinergi dengan pemerintah daerah, desa, instansi, lembaga pendidikan, dan mitra profesional.", "Menjalin kerja sama dengan lembaga berwenang dalam perlindungan PMI.", "Mendorong terbentuknya sistem rujukan kasus yang jelas."] },
    { title: "Data, Pengaduan & Evaluasi", points: ["Membuat database CPMI, PMI, dan purna PMI yang membutuhkan pendampingan.", "Mencatat dan memantau pengaduan.", "Membuat laporan kegiatan secara berkala.", "Melakukan evaluasi program dan menyusun rekomendasi kebijakan."] }
  ];

  const valuesItems = [
    { title: "Integritas", desc: "Konsisten antara kata dan tindakan.", icon: "fa-gem", color: "blue" },
    { title: "Profesionalisme", desc: "Bekerja dengan standar dan kompetensi terbaik.", icon: "fa-briefcase", color: "green" },
    { title: "Transparansi", desc: "Terbuka dalam setiap proses pendampingan.", icon: "fa-eye", color: "yellow" },
    { title: "Akuntabilitas", desc: "Bertanggung jawab atas setiap layanan.", icon: "fa-clipboard-check", color: "red" },
    { title: "Humanis", desc: "Mengutamakan sisi kemanusiaan dalam pendampingan.", icon: "fa-heart", color: "blue" },
    { title: "Kolaboratif", desc: "Bersinergi dengan semua pemangku kepentingan.", icon: "fa-people-arrows", color: "green" },
    { title: "Pelayanan Prima", desc: "Memberi layanan terbaik bagi PMI dan keluarga.", icon: "fa-star", color: "yellow" }
  ];

  const sasaranItems = [
    { text: "Calon Pekerja Migran Indonesia", icon: "fa-user-plus" },
    { text: "Pekerja Migran Indonesia", icon: "fa-user" },
    { text: "PMI Purna", icon: "fa-user-check" },
    { text: "Keluarga PMI", icon: "fa-people-roof" },
    { text: "Pemerintah Desa", icon: "fa-house-chimney" },
    { text: "Sekolah & Perguruan Tinggi", icon: "fa-graduation-cap" },
    { text: "Organisasi Kemasyarakatan", icon: "fa-people-group" },
    { text: "Dunia Usaha", icon: "fa-building" }
  ];

  //const galleryItems = [
  //  { seed: "yppm-01", cls: "wide", cap: "Sosialisasi Migrasi Aman — Kediri" },
  //  { seed: "yppm-02", cls: "tall", cap: "Edukasi Prosedur Penempatan Resmi" },
  //  { seed: "yppm-03", cls: "",     cap: "Posko Pengaduan PMI" },
  //  { seed: "yppm-04", cls: "",     cap: "Pendampingan Hukum PMI" },
  //  { seed: "yppm-05", cls: "tall", cap: "Konseling Psikologis PMI" },
  //  { seed: "yppm-06", cls: "",     cap: "Pelatihan Kewirausahaan PMI Purna" },
  //  { seed: "yppm-07", cls: "wide", cap: "Edukasi Desa Sadar Migrasi" },
  //  { seed: "yppm-08", cls: "",     cap: "Rapat Koordinasi Relawan YPPM" },
  //  { seed: "yppm-09", cls: "",     cap: "Kampanye Anti-TPPO" },
  //  { seed: "yppm-10", cls: "tall", cap: "Pendampingan Dokumen CPMI" },
  //  { seed: "yppm-11", cls: "",     cap: "Sinergi Bersama Pemerintah Desa" },
  //  { seed: "yppm-12", cls: "",     cap: "Pelepasan Purna PMI" }
  //];

  let galleryItems = [];
  let currentPage = 1;
  let lastPage = 1;
  let loading = false;

  const serviceItems = [
    { text: "Konsultasi gratis mengenai bekerja ke luar negeri", icon: "fa-comments" },
    { text: "Verifikasi legalitas perusahaan penempatan (P3MI)", icon: "fa-magnifying-glass" },
    { text: "Edukasi hak dan kewajiban CPMI", icon: "fa-book" },
    { text: "Pendampingan pengurusan dokumen", icon: "fa-file-lines" },
    { text: "Pendampingan apabila terjadi permasalahan hukum", icon: "fa-scale-balanced" },
    { text: "Pengaduan dugaan penipuan, calo, dan TPPO", icon: "fa-triangle-exclamation" },
    { text: "Pendampingan keluarga PMI", icon: "fa-people-roof" },
    { text: "Edukasi reintegrasi bagi PMI purna", icon: "fa-arrows-rotate" }
  ];

  const materiItems = [
    { title: "Menjadi PMI Secara Prosedural", icon: "fa-route", danger: false, points: ["Persyaratan menjadi CPMI.", "Tahapan penempatan.", "Dokumen yang harus dimiliki.", "Pentingnya kontrak kerja."] },
    { title: "Hak CPMI", icon: "fa-scale-balanced", danger: false, points: ["Mendapat informasi yang benar.", "Mendapat pelatihan.", "Mendapat perlindungan hukum.", "Mendapat jaminan sosial.", "Mendapat perlindungan selama bekerja."] },
    { title: "Kewajiban CPMI", icon: "fa-list-check", danger: false, points: ["Mematuhi peraturan negara tujuan.", "Menjaga nama baik Indonesia.", "Mematuhi kontrak kerja.", "Melengkapi dokumen resmi."] },
    { title: "Bahaya Penempatan Nonprosedural", icon: "fa-triangle-exclamation", danger: true, points: ["Tidak memiliki perlindungan hukum.", "Rentan menjadi korban perdagangan orang (TPPO).", "Gaji tidak dibayar.", "Kekerasan dan eksploitasi.", "Sulit memperoleh bantuan ketika terjadi masalah."] }
  ];

  const peranItems = [
    { text: "Edukator masyarakat", icon: "fa-chalkboard-user" },
    { text: "Pendamping CPMI dan PMI", icon: "fa-handshake-angle" },
    { text: "Mitra pemerintah", icon: "fa-landmark" },
    { text: "Mitra perusahaan penempatan yang legal", icon: "fa-building-shield" },
    { text: "Mitra aparat penegak hukum dalam pencegahan TPPO", icon: "fa-shield-halved" },
    { text: "Pusat informasi migrasi aman", icon: "fa-circle-info" }
  ];

  const hukumItems = [
    { text: "Undang-Undang Nomor 18 Tahun 2017 tentang Pelindungan Pekerja Migran Indonesia.", icon: "fa-gavel" },
    { text: "Peraturan pelaksana yang mengatur penempatan dan pelindungan PMI.", icon: "fa-file-contract" },
    { text: "Ketentuan pemerintah mengenai pencegahan Tindak Pidana Perdagangan Orang (TPPO).", icon: "fa-shield-halved" }
  ];

  const dpcItems = ["Kediri","Nganjuk","Blitar","Tulungagung","Trenggalek","Malang Raya","Ponorogo","Madiun","Ngawi","Magetan","Banyuwangi","Jember"];

  /* ===========================================================
     2. RENDER — semua konten dibangun lewat jQuery
  =========================================================== */
  const $philo = $("#philoGrid");
  philosophyItems.forEach(it => {
    $philo.append(`
      <div class="philo-item">
        <div class="philo-ico ico-${it.color}"><i class="fa-solid ${it.icon}"></i></div>
        <div><h4>${it.title}</h4><p>${it.desc}</p></div>
      </div>`);
  });

  const $misi = $("#misiList");
  misiItems.forEach(text => $misi.append(`<li><i class="fa-solid fa-circle-check"></i> ${text}</li>`));

  const $tujuan = $("#tujuanGrid");
  tujuanItems.forEach(it => $tujuan.append(`<div class="tujuan-item"><i class="fa-solid ${it.icon}"></i><p>${it.text}</p></div>`));

  const $programGrid = $("#programGrid");
  programUnggulan.forEach((it, i) => {
    $programGrid.append(`
      <div class="program-card stagger-item">
        <span class="pn">0${i + 1}</span>
        <div class="p-ico"><i class="fa-solid ${it.icon}"></i></div>
        <h3>${it.title}</h3>
        <p>${it.desc}</p>
      </div>`);
  });

  const $peduli = $("#peduliGrid");
  peduliItems.forEach((it, i) => {
    $peduli.append(`
      <div class="peduli-item">
        <span class="pd-num">0${i + 1}</span>
        <i class="fa-solid ${it.icon}"></i>
        <strong>${it.title}</strong>
        <span>${it.sub}</span>
      </div>`);
  });

  const $acc = $("#workplanAccordion");
  workplanItems.forEach((it, i) => {
    const pts = it.points.map(p => `<li><i class="fa-solid fa-circle"></i> ${p}</li>`).join("");
    $acc.append(`
      <div class="acc-item">
        <button class="acc-head" type="button">
          <span class="acc-num">${String(i + 1).padStart(2, "0")}</span>
          <h4>${it.title}</h4>
          <i class="fa-solid fa-chevron-down"></i>
        </button>
        <div class="acc-body"><div class="acc-body-in"><ul>${pts}</ul></div></div>
      </div>`);
  });

  const $values = $("#valuesGrid");
  valuesItems.forEach(it => {
    $values.append(`
      <div class="value-card stagger-item">
        <div class="value-ring ico-${it.color}"><i class="fa-solid ${it.icon}"></i></div>
        <h4>${it.title}</h4>
        <p>${it.desc}</p>
      </div>`);
  });

  const $sasaran = $("#sasaranChips");
  sasaranItems.forEach(it => $sasaran.append(`<span class="chip"><i class="fa-solid ${it.icon}"></i>${it.text}</span>`));

  function loadGallery(page = 1) {
  if (loading || page > lastPage) return;

  loading = true;

  $.get('/loadGallery', {
    page: page
  }, function (response) {

    currentPage = response.current_page;
    lastPage = response.last_page;

	if (currentPage < lastPage) {
		$('#loadMore').show();
	} else {
		$('#loadMore').hide();
	}

    response.data.forEach((item) => {
      const index = galleryItems.length;

      galleryItems.push(item);

      $gallery.append(`
        <div class="g-item ${item.cls ?? ''}" data-index="${index}">
          <div class="g-skel"></div>
          <img
            data-src="${item.image}"
            alt="${item.description ?? ''}"
          >
          <div class="g-overlay">
            <p>${item.description ?? ''}</p>
          </div>
          <div class="g-zoom">
            <i class="fa-solid fa-expand"></i>
          </div>
        </div>
      `);

	  $gallery.find("img[data-src]").each(function () {
		lazyObserver.observe(this);
	});
    });

    loading = false;

    //initGallery();
	//loadGallery(1);

  }).fail(function () {
    loading = false;
  });
}

loadGallery(1);
$('#loadMore').hide();

  $('#loadMore').on('click', function () {
    loadGallery(currentPage + 1);
  });

  const $gallery = $("#galleryGrid");
  galleryItems.forEach((it, i) => {
    const url = `https://picsum.photos/seed/${it.seed}/700/700`;
    $gallery.append(`
      <div class="g-item ${it.cls}" data-index="${i}">
        <div class="g-skel"></div>
        <img data-src="${url}" alt="${it.cap}">
        <div class="g-overlay"><p>${it.cap}</p></div>
        <div class="g-zoom"><i class="fa-solid fa-expand"></i></div>
      </div>`);
  });

  const $serviceGrid = $("#serviceGrid");
  serviceItems.forEach((it, i) => {
    $serviceGrid.append(`
      <div class="service-card">
        <span class="sn">0${i + 1}</span>
        <i class="fa-solid ${it.icon}"></i>
        <p>${it.text}</p>
      </div>`);
  });

  const $materiGrid = $("#materiGrid");
  materiItems.forEach(it => {
    const pts = it.points.map(p => `<li><i class="fa-solid fa-circle"></i> ${p}</li>`).join("");
    $materiGrid.append(`
      <div class="materi-card ${it.danger ? "danger" : ""}">
        <h4><i class="fa-solid ${it.icon}"></i> ${it.title}</h4>
        <ul>${pts}</ul>
      </div>`);
  });

  const $peranWrap = $("#peranWrap");
  peranItems.forEach(it => $peranWrap.append(`<span class="chip"><i class="fa-solid ${it.icon}"></i>${it.text}</span>`));

  const $hukumList = $("#hukumList");
  hukumItems.forEach(it => $hukumList.append(`<div class="hukum-item"><i class="fa-solid ${it.icon}"></i><p>${it.text}</p></div>`));

  const $dpcGrid = $("#dpcGrid");
  dpcItems.forEach((name, i) => {
    $dpcGrid.append(`
      <div class="dpc-chip stagger-item">
        <i class="fa-solid fa-location-dot" style="color:var(--blue); font-size:15px;"></i>
        <div><span class="dn">DPC ${String(i + 1).padStart(2, "0")}</span><strong>${name}</strong></div>
      </div>`);
  });

  /* ===========================================================
     3. HEADER — sticky shadow + mobile toggle + scrollspy
  =========================================================== */
  const $header = $("#siteHeader");
  const $navLinks = $("#navLinks");
  $(window).on("scroll", function () {
    $header.toggleClass("scrolled", $(this).scrollTop() > 30);
  });

  $("#navToggle").on("click", function () {
    $navLinks.toggleClass("open");
  });
  $navLinks.find("a").on("click", function () {
    $navLinks.removeClass("open");
  });

  const sectionIds = ["beranda", "tentang", "program", "sejarah", "pengurus", "galeri", "posbantuan", "berita", "kontak"];
  const $sections = sectionIds.map(id => $("#" + id)).filter($s => $s.length);

  function scrollSpy() {
    const pos = $(window).scrollTop() + 130;
    let current = sectionIds[0];
    $sections.forEach($s => { if ($s.offset().top <= pos) current = $s.attr("id"); });
    $navLinks.find("a").removeClass("active").each(function () {
      if ($(this).attr("href") === "#" + current) $(this).addClass("active");
    });
  }
  $(window).on("scroll", scrollSpy);
  scrollSpy();

  // smooth scroll with header offset
  $('a[href^="#"]').on("click", function (e) {
    const id = $(this).attr("href");
    const $target = $(id);
    if ($target.length) {
      e.preventDefault();
      $("html, body").animate({ scrollTop: $target.offset().top - 84 }, 650, "swing");
    }
  });

  /* ===========================================================
     4. REVEAL ON SCROLL
  =========================================================== */
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  document.querySelectorAll(".reveal, .reveal-scale, .stagger").forEach(el => revealObserver.observe(el));

  /* ===========================================================
     5. GALLERY — lazy load + lightbox
  =========================================================== */
  const lazyObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const $img = $(entry.target);
        const src = $img.data("src");
        if (src && !$img.attr("src")) {
          const tmp = new Image();
          tmp.onload = () => {
            $img.attr("src", src).addClass("loaded");
            $img.closest(".g-item").find(".g-skel").addClass("hide");
          };
          tmp.src = src;
        }
        lazyObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: "150px" });

  document.querySelectorAll("#galleryGrid img[data-src]").forEach(img => lazyObserver.observe(img));

  const $lightbox = $("#lightbox");
  const $lbImg = $("#lbImg");
  const $lbCap = $("#lbCap");
  let lbIndex = 0;

  function openLightbox(index) {
	lbIndex = index;

	const item = galleryItems[lbIndex];

	$lbImg.attr("src", item.image);
	$lbCap.text(item.caption);

	$lightbox.addClass("show");
	$("body").css("overflow", "hidden");
  }
  
  function closeLightbox() {
    $lightbox.removeClass("show");
    $("body").css("overflow", "");
  }

  function navLightbox(dir) {
	lbIndex = (lbIndex + dir + galleryItems.length) % galleryItems.length;

	const item = galleryItems[lbIndex];

	$lbImg.attr("src", item.image);
	$lbCap.text(item.caption);
  }

  $(document).on("click", ".g-item", function () { openLightbox(parseInt($(this).data("index"), 10)); });
  $("#lbClose").on("click", closeLightbox);
  $lightbox.on("click", function (e) { if (e.target === this) closeLightbox(); });
  $("#lbPrev").on("click", () => navLightbox(-1));
  $("#lbNext").on("click", () => navLightbox(1));
  $(document).on("keydown", function (e) {
    if (!$lightbox.hasClass("show")) return;
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") navLightbox(-1);
    if (e.key === "ArrowRight") navLightbox(1);
  });

  /* ===========================================================
     6. ACCORDION — Program Kerja 2026-2027
  =========================================================== */
  $(document).on("click", ".acc-head", function () {
    const $item = $(this).closest(".acc-item");
    const $body = $item.find(".acc-body");
    const isOpen = $item.hasClass("open");

    $(".acc-item.open").each(function () {
      $(this).removeClass("open").find(".acc-body").css("max-height", 0);
    });

    if (!isOpen) {
      $item.addClass("open");
      $body.css("max-height", $body.find(".acc-body-in")[0].scrollHeight + "px");
    }
  });
  // buka item pertama secara default
  $(".acc-item").first().find(".acc-head").trigger("click");

  /* ===========================================================
     7. TABS — Pos Bantuan CPMI
  =========================================================== */
  $("#posTabsNav .tab-btn").on("click", function () {
    const tab = $(this).data("tab");
    $("#posTabsNav .tab-btn").removeClass("active");
    $(this).addClass("active");
    $(".tab-panel").removeClass("active");
    $(`.tab-panel[data-panel="${tab}"]`).addClass("active");
  });

  /* ===========================================================
     8. FORM -> WHATSAPP
  =========================================================== */
  $("#formBantuan").on("submit", function (e) {
    e.preventDefault();

    const nama = $("#inpNama").val().trim();
    const alamat = $("#inpAlamat").val().trim();
    const keluhan = $("#inpKeluhan").val().trim();

    let valid = true;
    [["fieldNama", nama], ["fieldAlamat", alamat], ["fieldKeluhan", keluhan]].forEach(([id, val]) => {
      $("#" + id).toggleClass("error", val.length === 0);
      if (val.length === 0) valid = false;
    });
    if (!valid) return;

    const pesan =
      "Assalamu'alaikum / Salam sejahtera, Tim Pos Bantuan YPPM.%0A%0A" +
      "Saya ingin mengajukan bantuan dan pendampingan:%0A" +
      `*Nama:* ${nama}%0A` +
      `*Alamat:* ${alamat}%0A` +
      `*Keluhan:* ${keluhan}%0A%0A` +
      "Mohon informasi dan tindak lanjutnya. Terima kasih.";

    const waUrl = `https://wa.me/${WA_NUMBER}?text=${pesan}`;

    $("#waToast").addClass("show");
    setTimeout(() => $("#waToast").removeClass("show"), 3200);

    setTimeout(() => {
      window.open(waUrl, "_blank");
      this.reset();
    }, 450);
  });

  $("#formBantuan input, #formBantuan textarea").on("input", function () {
    $(this).closest(".field").removeClass("error");
  });

  /* ===========================================================
     9. FLOATING BACK-TO-TOP
  =========================================================== */
  const $fabTop = $("#fabTop");
  $(window).on("scroll", function () {
    $fabTop.toggleClass("show", $(this).scrollTop() > 500);
  });
  $fabTop.on("click", function () {
    $("html, body").animate({ scrollTop: 0 }, 600);
  });

  let activityPage = 1;

  const activityGrid = document.getElementById('activityGrid');
  const activityPrev = document.getElementById('activityPrev');
  const activityNext = document.getElementById('activityNext');
  const activityPageText = document.getElementById('activityPage');
  const activityNavigation = document.getElementById('activityNavigation');

  async function loadActivities(page = 1) {
      const response = await fetch(`/activities?page=${page}`, {
          headers: {
              'Accept': 'application/json'
          }
      });

      const result = await response.json();

      const pagination = result.pagination;

      activityPage = pagination.current_page;

      //activityGrid.style.gridTemplateColumns =
      //    `repeat(${Math.min(result.data.length, 4)}, minmax(0, 1fr))`;

      activityGrid.innerHTML = result.data.map(activity => {
          const image = activity.images?.[0];

          const imageUrl = image
              ? `/storage/${image.image}`
              : '/assets/images/placeholder.jpg';

          return `
              <article class="news-card">
                  <div class="news-image">
                      <a href="/activities/${activity.id}"> <img src="${imageUrl}" alt="${activity.title}"></a>
                  </div>

                  <div class="news-content">
                      <span class="news-date">
                          ${activity.location} - 
                          ${formatActivityDate(activity.activity_date)}
                      </span>

                      <h3 class="news-title">
                          ${activity.title}
                      </h3>

                      <a href="/activities/${activity.id}" class="news-link">
                          Selengkapnya
                      </a>
                  </div>
              </article>
          `;
      }).join('');

      activityPrev.disabled = pagination.current_page <= 1;
      activityNext.disabled = pagination.current_page >= pagination.last_page;

      activityPageText.textContent =
          `${pagination.current_page} / ${pagination.last_page}`;

      activityNavigation.style.display =
          pagination.last_page > 1 ? 'flex' : 'none';
  }

  function formatActivityDate(date) {
      return new Date(date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      });
  }

  activityPrev.addEventListener('click', () => {
      if (activityPage > 1) {
          loadActivities(activityPage - 1);
      }
  });

  activityNext.addEventListener('click', () => {
      loadActivities(activityPage + 1);
  });

  loadActivities();

  function formatActivityDate(date) {
      return new Date(date).toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
      });
  }

  activityPrev.addEventListener('click', () => {
      if (activityPage > 1) {
          loadActivities(activityPage - 1);
      }
  });

  activityNext.addEventListener('click', () => {
      if (activityPage < 999) {
          loadActivities(activityPage + 1);
      }
  });
});