# DERMALINE UI - Technical & Architectural Project Context

> **Project Name:** DERMALINE UI  
> **Brand Name:** Dermaline (DERMALINE - Korean Derma Cosmetics & Aesthetic Skincare)  
> **Repository Root:** `D:\Demo web\dermaline-UI`  
> **Last Updated:** August 2026  

---

## 1. Thương Hiệu & Định Vị (Brand Identity & Positioning)

### A. Giới thiệu Thương Hiệu
**Dermaline (DERMALINE)** là thương hiệu dược mỹ phẩm (**Derma Cosmetics**) cao cấp đến từ Hàn Quốc, tập trung vào các sản phẩm chăm sóc da chuyên sâu, kết hợp giữa khoa học da liễu và công nghệ thẩm mỹ (**Aesthetic Skincare**).

Thương hiệu định vị ở phân khúc chuyên nghiệp (**Professional Skincare**), hướng đến các phòng khám da liễu, spa và người dùng mong muốn giải pháp chăm sóc da tại nhà đạt hiệu quả tương đương liệu trình thẩm mỹ.

### B. Định vị & Khách hàng Mục tiêu
* **Xuất xứ:** Hàn Quốc (Korean Medical Aesthetics & Derma Cosmetics).
* **Đối tượng khách hàng:**
  * Người có làn da nhạy cảm, dễ kích ứng.
  * Da sau điều trị lâm sàng, xâm lấn nhẹ (laser, peel, vi kim, tiêm thẩm mỹ).
  * Da tổn thương cần phục hồi hàng rào bảo vệ.
  * Người quan tâm đến giải pháp chống lão hóa, tái tạo mô da chuyên sâu.
* **Quy mô & Chứng nhận:**
  * Hiện diện tại hơn **50 quốc gia**.
  * Sở hữu nhà máy sản xuất riêng và Trung tâm R&D đạt tiêu chuẩn y tế quốc tế.
  * Đạt chứng nhận tiêu chuẩn quốc tế: **ISO 13485, ISO 22716, KGMP, CE, CPNP** (cho mỹ phẩm và thiết bị thẩm mỹ).

### C. Triết lý & Công nghệ Trọng tâm
* **Triết lý:** Phục hồi da từ bên trong, loại bỏ các thành phần dễ gây kích ứng, tối ưu hóa hiệu quả lâm sàng thay vì chạy theo xu hướng thị trường thuần túy.
* **Công nghệ cốt lõi:**
  * **PDRN (Polydeoxyribonucleotide):** Tinh chất cá hồi tái tạo mô tế bào, thúc đẩy làm lành thương tổn.
  * **Exosome:** Công nghệ sinh học đột phá phục hồi & chống lão hóa tế bào cấp độ phân tử.
  * **Cica (Centella Asiatica):** Phức hợp rau má làm dịu cấp tốc & giảm đỏ.
  * **Active Hyaluronic & Peptides:** Cấp ẩm tầng sâu và cải thiện độ đàn hồi.

### D. Phong cách Thiết kế & Nhận diện Brand
* **Hình ảnh:** Khoa học, Chuyên nghiệp, Tối giản (Korean Minimalism), Đáng tin cậy.
* **Tương quan thị trường:** Không thuộc nhóm mỹ phẩm tiêu dùng đại chúng (Laneige, Innisfree), Dermaline đứng cùng nhóm dược mỹ phẩm chuyên sâu như *Medi-Peel, Cell Fusion C, Dr.G*.

---

## 2. Executive Summary & Tech Stack

### Core Tech Stack
* **Framework:** Next.js `16.2.12` (App Router architecture với Route Groups)
* **Runtime / React:** React `19.2.4`, React-DOM `19.2.4`, Node.js `>=20.0.0`
* **Language:** TypeScript `5.x`
* **Styling & Design System:**
  * Tailwind CSS `v4` (`@tailwindcss/postcss`, `@theme` directives trong `globals.css`)
  * Ant Design (`antd` `^6.5.2`) qua `@ant-design/nextjs-registry` hỗ trợ SSR
  * Lucide Icons (`lucide-react`)
* **State Management:** Zustand `^5.0.14` (Auth, Cart, Wishlist)
* **Data Fetching / HTTP:** SWR `^2.4.2`, Axios `^1.18.1`, Custom `apiClient` với Exponential Backoff Retry (`fetchWithBackoff`)
* **Đa ngôn ngữ (i18n):** Hook `useTranslation` hỗ trợ **Tiếng Việt (VIE)**, **Tiếng Anh (EN)**, **Tiếng Hàn (KR)**

---

## 3. Cấu Trúc Thư Mục Chi Tiết (Project Directory Map)

```
dermaline-UI/
├── PROJECT_CONTEXT.md         # 📌 Ngữ cảnh dự án & Thương hiệu hoàn chỉnh
├── public/                    # Tài nguyên tĩnh (Hình ảnh, logo, chứng nhận)
├── src/
│   ├── @core/                 # Thành phần cốt lõi dùng chung (Pagination, Antd Dropdown)
│   ├── app/                   # Next.js 16 App Router
│   │   ├── (customer)/        # Nhóm route khách hàng
│   │   │   ├── account/       # Quản lý tài khoản
│   │   │   ├── brand/         # Câu chuyện thương hiệu Dermaline & Chứng nhận R&D
│   │   │   ├── by-brand/      # Sản phẩm theo thương hiệu (Dermaline, Dlexo, Reden)
│   │   │   ├── cart/ & checkout/ # Giỏ hàng & thanh toán
│   │   │   ├── community/     # Tin tức nghiên cứu, FAQ phòng khám
│   │   │   ├── lines/         # Dòng sản phẩm (PDRN Care, Cica, Ampoule, Sun Care,...)
│   │   │   ├── products/      # Danh mục toàn bộ sản phẩm
│   │   │   ├── specialty/     # Sản phẩm chuyên dụng cho Spa & Phòng khám da liễu
│   │   │   ├── type/          # Loại sản phẩm (Ampoule, Serum, Cream, Toner, Mask,...)
│   │   │   └── wishlist/      # Sản phẩm yêu thích
│   │   ├── globals.css        # Theme tokens, font chữ y khoa/thẩm mỹ, animations
│   │   ├── layout.tsx         # Root Layout
│   │   └── providers.tsx      # Ant Design ConfigProvider (Màu chủ đạo #58B9E7)
│   ├── components/            # Giao diện UI theo domain (home, product, brand,...)
│   ├── i18n/                  # Dịch thuật (en.ts, kr.ts, vie.ts) & useTranslation
│   ├── lib/                   # API client với backoff retry
│   ├── services/              # API Backend services (Auth, Product, Cart,...)
│   ├── store/                 # Zustand stores (useAuthStore, useCartStore, useWishlistStore)
│   └── types/                 # Interface TypeScript (Product, Cart, User,...)
├── next.config.ts           # Cấu hình domain ảnh remote (dermaline.co.kr,...)
└── package.json             # Dependencies & build scripts
```

---

## 4. Hệ Thống Design System & Nhận Diện UI

### Color Tokens
* **Primary Brand Sky Blue:** `#58B9E7` *(Hover: `#38A5DC`, Alpha: `rgba(88,185,231,0.15)`)*
* **Dark Navy / Professional:** `#0F172A` (Slate 900)
* **Text Muted / Subtitle:** `#64748B` (Slate 500)
* **Background Primary:** `#FFFFFF` | **Surface:** `#F8FAFC`
* **Borders:** `#E2E8F0`

### Typography System
* **Headlines & Body:** `Plus Jakarta Sans`, `Manrope` (Hiện đại, rõ ràng, chuẩn y khoa)
* **Labels & Badges:** `Hanken Grotesk`
* **Luxury / Medical Serif Display:** `Playfair Display`, `Cormorant Garamond`

---

## 5. Quy Chuẩn Phát Triển Cho Lập Trình Viên & AI

1. **Brand Voice:** Đảm bảo ngôn từ và nội dung thể hiện tính **chuyên nghiệp, chuẩn y khoa (clinical), tối giản và tin cậy**.
2. **Path Aliasing:** Luôn sử dụng `@/` để import module (`@/components/...`, `@/store/...`).
3. **Đa ngôn ngữ (i18n):** Cập nhật đầy đủ 3 ngôn ngữ `vie.ts`, `en.ts`, `kr.ts` khi thêm văn bản UI mới.
4. **Quản lý trạng thái:** Sử dụng Zustand store để đồng bộ trạng thái giỏ hàng, thông tin tài khoản và yêu thích realtime trên Header.
