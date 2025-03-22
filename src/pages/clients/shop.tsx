import { useNavigate } from "react-router-dom";

function ShopPage() {
  const navigate = useNavigate(); // Sử dụng useNavigate để điều hướng

  const categories = [
    {
      name: "Ghế",
      products: [
        { id: 1, name: "Ghế Sofa", price: "2.500.000đ", image: "./src/assets/anh1.png" },
        { id: 2, name: "Ghế Văn Phòng", price: "1.200.000đ", image: "./src/assets/anh2.png" },
        { id: 3, name: "Ghế Gỗ", price: "3.000.000đ", image: "./src/assets/anh3.png" },
        { id: 4, name: "Ghế Thư Giãn", price: "4.500.000đ", image: "./src/assets/anh4.png" },
      ],
    },
    {
      name: "Bàn",
      products: [
        { id: 5, name: "Bàn Làm Việc", price: "3.000.000đ", image: "./src/assets/anh3.png" },
        { id: 6, name: "Bàn Cafe", price: "1.500.000đ", image: "./src/assets/anh4.png" },
        { id: 7, name: "Bàn Ăn", price: "5.000.000đ", image: "./src/assets/anh1.png" },
        { id: 8, name: "Bàn Học", price: "2.000.000đ", image: "./src/assets/anh2.png" },
      ],
    },
    {
      name: "Tủ",
      products: [
        { id: 9, name: "Tủ Quần Áo", price: "5.000.000đ", image: "./src/assets/anh1.png" },
        { id: 10, name: "Tủ Giày", price: "2.000.000đ", image: "./src/assets/anh2.png" },
        { id: 11, name: "Tủ Bếp", price: "6.000.000đ", image: "./src/assets/anh3.png" },
        { id: 12, name: "Tủ Trang Trí", price: "3.500.000đ", image: "./src/assets/anh4.png" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Cửa Hàng</h1>
        {categories.map((category) => (
          <div key={category.name} className="mb-12">
            {/* Tên danh mục */}
            <h2 className="text-2xl font-semibold mb-4">{category.name}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Sản phẩm */}
              {category.products.map((product) => (
                <div
                  key={product.id}
                  className="group relative bg-white rounded-xl overflow-hidden shadow-sm"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                      {/* Nút Thêm vào giỏ */}
                      <button
                        className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                        onClick={() => navigate("/cart")} // Điều hướng đến trang giỏ hàng
                      >
                        Thêm vào giỏ
                      </button>
                      {/* Nút Xem chi tiết sản phẩm */}
                      <button
                        className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                        onClick={() => navigate("/singleProduct")} // Điều hướng đến trang chi tiết sản phẩm
                      >
                        Xem chi tiết sản phẩm
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-lg text-neutral-800">{product.name}</h3>
                    <p className="text-neutral-500 text-sm">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShopPage;