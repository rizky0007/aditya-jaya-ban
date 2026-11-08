
"use client";

import { useMemo, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  Menu,
  MessageCircle,
  Search,
  ShieldCheck,
  Truck,
  Wrench,
  X,
} from "lucide-react";

type Product = {
  size: string;
  category: "Ban Truk" | "Ban Trailer";
  description: string;
  image: string;
};

const products: Product[] = [
  {
    size: "10.00 R20",
    category: "Ban Truk",
    description: "Pilihan ukuran untuk kebutuhan kendaraan niaga.",
    image: "/images/ban/10-00-r20.png",
  },
  {
    size: "11.00 R20",
    category: "Ban Truk",
    description: "Untuk mendukung operasional armada truk.",
    image: "/images/ban/11-00-r20.png",
  },
  {
    size: "12.00 R20",
    category: "Ban Truk",
    description: "Ukuran ban untuk kebutuhan angkutan berat.",
    image: "/images/ban/12-00-r20.png",
  },
  {
    size: "295/80 R22.5",
    category: "Ban Truk",
    description: "Pilihan untuk berbagai kendaraan niaga modern.",
    image: "/images/ban/295-80-r22-5.png",
  },
  {
    size: "315/80 R22.5",
    category: "Ban Truk",
    description: "Dirancang untuk kebutuhan operasional armada.",
    image: "/images/ban/315-80-r22-5.png",
  },
  {
    size: "385/65 R22.5",
    category: "Ban Trailer",
    description: "Pilihan ukuran untuk kendaraan trailer.",
    image: "/images/ban/385-65-r22-5.png",
  },
];

const categories = ["Semua", "Ban Truk", "Ban Trailer"] as const;
const WA_NUMBER = "6281234567890";

function waLink(message: string) {
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(message)}`;
}

function Logo() {
  return (
    <a className="brand" href="#beranda" aria-label="Aditya Jaya Ban">
      <span className="brand-mark">AJ</span>
      <span className="brand-copy">
        <strong>ADITYA JAYA <b>BAN</b></strong>
        <small>TRUCK TIRE SOLUTIONS</small>
      </span>
    </a>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="section-heading">
      <div>
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
      </div>
      <p>{description}</p>
    </div>
  );
}

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("Semua");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    const keyword = search.trim().toLowerCase();

    return products.filter((product) => {
      const matchesCategory =
        activeCategory === "Semua" || product.category === activeCategory;

      const matchesSearch =
        !keyword ||
        `${product.size} ${product.category} ${product.description}`
          .toLowerCase()
          .includes(keyword);

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, search]);

  const navItems = [
    ["Beranda", "#beranda"],
    ["Produk", "#produk"],
    ["Tentang Kami", "#tentang"],
    ["Layanan", "#layanan"],
    ["Kontak", "#kontak"],
  ];

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <main>
      <section className="hero" id="beranda">
        <div className="hero-image" />
        <div className="hero-overlay" />

        <header className="site-header">
          <div className="container header-inner">
            <Logo />

            <button
              type="button"
              className="mobile-menu-button"
              onClick={() => setMenuOpen((value) => !value)}
              aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={23} /> : <Menu size={23} />}
            </button>

            <nav className={`navigation ${menuOpen ? "navigation-open" : ""}`}>
              {navItems.map(([label, href]) => (
                <a key={href} href={href} onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </nav>

            <a
              className="header-cta"
              href={waLink("Halo Aditya Jaya Ban, saya ingin konsultasi.")}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={17} />
              Konsultasi
            </a>
          </div>
        </header>

        <div className="container hero-content">
          <div className="hero-text">
            <span className="hero-kicker">
              <span />
              ADITYA JAYA BAN · SOLUSI BAN NIAGA
            </span>

            <h1>
              Siap menemani
              <br />
              <span>setiap perjalanan.</span>
            </h1>

            <p>
              Solusi ban truk kanisir untuk mendukung kebutuhan armada,
              perjalanan, dan aktivitas bisnis Anda.
            </p>

            <div className="hero-buttons">
              <a href="#produk" className="button button-yellow">
                Lihat Produk <ArrowRight size={18} />
              </a>
              <a
                href={waLink(
                  "Halo Aditya Jaya Ban, saya ingin bertanya tentang produk ban."
                )}
                target="_blank"
                rel="noreferrer"
                className="button button-outline"
              >
                <MessageCircle size={18} />
                Hubungi Kami
              </a>
            </div>
          </div>

          <a href="#produk" className="hero-scroll">
            <span>JELAJAHI ADITYA JAYA BAN</span>
            <ChevronDown size={17} />
          </a>
        </div>

        <div className="hero-bottom-line">
          <span>TRUCK TYRE</span>
          <span>RETREAD SOLUTIONS</span>
          <span>INDONESIA</span>
        </div>
      </section>

      <section className="intro-strip">
        <div className="container intro-grid">
          <div className="intro-title">
            <span className="eyebrow">KOMITMEN KAMI</span>
            <h2>Solusi yang berangkat dari kebutuhan Anda.</h2>
          </div>

          <div className="intro-item">
            <ShieldCheck size={23} />
            <div>
              <strong>Perhatian pada kualitas</strong>
              <p>Mengutamakan kesesuaian produk dan kebutuhan.</p>
            </div>
          </div>

          <div className="intro-item">
            <Truck size={23} />
            <div>
              <strong>Kebutuhan armada</strong>
              <p>Pilihan ukuran untuk kendaraan niaga.</p>
            </div>
          </div>

          <div className="intro-item">
            <MessageCircle size={23} />
            <div>
              <strong>Konsultasi langsung</strong>
              <p>Tanyakan kebutuhan produk melalui WhatsApp.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="products-section section" id="produk">
        <div className="container">
          <SectionHeading
            eyebrow="KATALOG PRODUK"
            title="Temukan ukuran ban yang sesuai."
            description="Lihat pilihan ukuran ban truk dan trailer. Hubungi kami untuk informasi ketersediaan dan konsultasi produk."
          />

          <div className="catalog-toolbar">
            <div className="category-filter" aria-label="Filter kategori">
              {categories.map((category) => (
                <button
                  key={category}
                  type="button"
                  className={activeCategory === category ? "filter-active" : ""}
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={activeCategory === category}
                >
                  {category}
                </button>
              ))}
            </div>

            <label className="search-box">
              <Search size={18} />
              <input
                type="search"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Cari ukuran ban..."
                aria-label="Cari ukuran ban"
              />
              {search && (
                <button
                  type="button"
                  onClick={() => setSearch("")}
                  aria-label="Hapus pencarian"
                >
                  <X size={16} />
                </button>
              )}
            </label>
          </div>

          <div className="catalog-meta">
            <span>
              Menampilkan <strong>{filteredProducts.length}</strong> produk
            </span>
            {(search || activeCategory !== "Semua") && (
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Semua");
                }}
              >
                Reset filter
              </button>
            )}
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map((product) => (
                <article className="product-card" key={product.size}>
                  <button
                    type="button"
                    className="product-image"
                    onClick={() => setSelectedProduct(product)}
                    aria-label={`Lihat detail ban ${product.size}`}
                  >
                    <img
                      src={product.image}
                      alt={`Ban ukuran ${product.size}`}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.style.display = "none";
                        event.currentTarget.parentElement?.classList.add(
                          "image-missing"
                        );
                      }}
                    />
                    <span className="image-fallback">
                      <span className="fallback-ring" />
                      <small>FOTO PRODUK</small>
                    </span>
                    <span className="image-view">
                      Lihat detail <ArrowUpRight size={15} />
                    </span>
                  </button>

                  <div className="product-info">
                    <span className="product-category">{product.category}</span>
                    <h3>{product.size}</h3>
                    <p>{product.description}</p>
                    <button
                      type="button"
                      className="product-link"
                      onClick={() => setSelectedProduct(product)}
                    >
                      Tanya produk <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="empty-products">
              <Search size={28} />
              <h3>Produk tidak ditemukan</h3>
              <p>Coba gunakan kata kunci atau kategori yang berbeda.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setActiveCategory("Semua");
                }}
              >
                Tampilkan semua produk
              </button>
            </div>
          )}
        </div>
      </section>

      <section className="about-section section" id="tentang">
        <div className="container about-layout">
          <div className="about-photo">
            <div className="about-photo-label">
              <span>ADITYA JAYA BAN</span>
              <strong>Partner kebutuhan ban kendaraan niaga.</strong>
            </div>
          </div>

          <div className="about-content">
            <span className="eyebrow">TENTANG KAMI</span>
            <h2>
              Memahami kebutuhan.
              <br />
              <span>Menjaga perjalanan.</span>
            </h2>
            <p>
              Aditya Jaya Ban hadir untuk membantu memenuhi kebutuhan ban truk
              kanisir. Kami berfokus pada pilihan ukuran yang sesuai,
              kemudahan konsultasi, dan pelayanan untuk kebutuhan kendaraan
              niaga.
            </p>
            <p>
              Setiap armada memiliki kebutuhan berbeda. Karena itu, kami
              mengutamakan komunikasi agar pelanggan dapat menemukan pilihan
              yang tepat.
            </p>

            <div className="about-points">
              <span>
                <Check size={17} /> Konsultasi ukuran ban
              </span>
              <span>
                <Check size={17} /> Pilihan ban truk dan trailer
              </span>
              <span>
                <Check size={17} /> Komunikasi langsung dengan tim
              </span>
            </div>

            <a
              className="text-link"
              href={waLink(
                "Halo Aditya Jaya Ban, saya ingin mengetahui lebih lanjut tentang layanan Anda."
              )}
              target="_blank"
              rel="noreferrer"
            >
              Kenali layanan kami <ArrowUpRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="services-section section" id="layanan">
        <div className="container">
          <SectionHeading
            eyebrow="LAYANAN KAMI"
            title="Dukungan untuk kebutuhan armada."
            description="Kami membantu pelanggan mendapatkan informasi produk dan pilihan ban yang sesuai dengan kebutuhan kendaraan."
          />

          <div className="service-list">
            <article className="service-row">
              <span className="service-number">01</span>
              <div className="service-icon">
                <Wrench size={25} />
              </div>
              <div className="service-copy">
                <h3>Solusi ban kanisir</h3>
                <p>
                  Informasi pilihan ban kanisir untuk mendukung kebutuhan
                  operasional kendaraan niaga.
                </p>
              </div>
              <ArrowUpRight className="service-arrow" size={22} />
            </article>

            <article className="service-row">
              <span className="service-number">02</span>
              <div className="service-icon">
                <Truck size={25} />
              </div>
              <div className="service-copy">
                <h3>Pilihan ukuran ban</h3>
                <p>
                  Konsultasikan ukuran ban truk maupun trailer sesuai
                  spesifikasi kendaraan.
                </p>
              </div>
              <ArrowUpRight className="service-arrow" size={22} />
            </article>

            <article className="service-row">
              <span className="service-number">03</span>
              <div className="service-icon">
                <MessageCircle size={25} />
              </div>
              <div className="service-copy">
                <h3>Konsultasi produk</h3>
                <p>
                  Tanyakan informasi produk, harga, dan ketersediaan secara
                  langsung kepada tim kami.
                </p>
              </div>
              <ArrowUpRight className="service-arrow" size={22} />
            </article>
          </div>
        </div>
      </section>

      <section className="contact-section" id="kontak">
        <div className="container contact-inner">
          <div>
            <span className="eyebrow">HUBUNGI ADITYA JAYA BAN</span>
            <h2>
              Ada kebutuhan ban
              <br />
              untuk armada Anda?
            </h2>
            <p>
              Ceritakan kebutuhan kendaraan Anda. Kami siap membantu
              memberikan informasi produk.
            </p>
          </div>

          <a
            href={waLink(
              "Halo Aditya Jaya Ban, saya ingin konsultasi kebutuhan ban untuk armada saya."
            )}
            target="_blank"
            rel="noreferrer"
            className="button button-yellow contact-button"
          >
            <MessageCircle size={19} />
            Hubungi via WhatsApp
            <ArrowUpRight size={18} />
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer-main">
          <div>
            <Logo />
            <p>
              Solusi ban truk kanisir untuk mendukung kebutuhan kendaraan
              niaga Anda.
            </p>
          </div>

          <div className="footer-navigation">
            <span>JELAJAHI</span>
            <a href="#produk">Produk</a>
            <a href="#tentang">Tentang Kami</a>
            <a href="#layanan">Layanan</a>
          </div>

          <div className="footer-navigation">
            <span>HUBUNGI</span>
            <a
              href={waLink("Halo Aditya Jaya Ban, saya ingin bertanya.")}
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href="#kontak">Konsultasi produk</a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © {new Date().getFullYear()} Aditya Jaya Ban. Hak cipta dilindungi.
          </span>
          <a href="#beranda">Kembali ke atas ↑</a>
        </div>
      </footer>

      {selectedProduct && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedProduct(null)}
          role="presentation"
        >
          <div
            className="product-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="modal-close"
              onClick={() => setSelectedProduct(null)}
              aria-label="Tutup detail"
            >
              <X size={21} />
            </button>

            <span className="eyebrow">INFORMASI PRODUK</span>
            <span className="modal-category">{selectedProduct.category}</span>
            <h2 id="modal-title">{selectedProduct.size}</h2>
            <p>{selectedProduct.description}</p>
            <p>
              Hubungi kami untuk menanyakan harga, ketersediaan, dan informasi
              lebih lanjut mengenai ukuran ini.
            </p>

            <a
              className="button button-yellow modal-button"
              href={waLink(
                `Halo Aditya Jaya Ban, saya ingin bertanya tentang ban ukuran ${selectedProduct.size}.`
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle size={18} />
              Tanya via WhatsApp
              <ArrowRight size={17} />
            </a>
          </div>
        </div>
      )}
    </main>
  );
}
