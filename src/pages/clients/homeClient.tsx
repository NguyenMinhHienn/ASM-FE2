import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaEye, FaHeart } from "react-icons/fa";

function HomeClient() {
  const navigate = useNavigate(); // Initialize navigate

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Sản phẩm nổi bật */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Sản phẩm nổi bật</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Product 1 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="./src/assets/anh1.png"
                alt="Product 1"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/cart")} // Chuyển đến trang giỏ hàng
                >
                  Thêm vào giỏ hàng
                  
                </button>
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/singleProduct")} // Chuyển đến trang chi tiết sản phẩm
                >
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg text-neutral-800">Syltherine</h3>
              <p className="text-neutral-500 text-sm mb-2">Stylish cafe chair</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rp 2.500.000</span>
                <span className="text-neutral-400 line-through text-sm">
                  Rp 3.500.000
                </span>
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="./src/assets/anh2.png"
                alt="Product 2"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/cart")} // Chuyển đến trang giỏ hàng
                >
                  Thêm vào giỏ hàng
                  
                </button>
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/singleProduct")} // Chuyển đến trang chi tiết sản phẩm
                >
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg text-neutral-800">Leviosa</h3>
              <p className="text-neutral-500 text-sm mb-2">Modern desk lamp</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rp 1.200.000</span>
                <span className="text-neutral-400 line-through text-sm">
                  Rp 1.800.000
                </span>
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="./src/assets/anh3.png"
                alt="Product 3"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/cart")} // Chuyển đến trang giỏ hàng
                >
                  Thêm vào giỏ hàng
                  
                </button>
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/singleProduct")} // Chuyển đến trang chi tiết sản phẩm
                >
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg text-neutral-800">Gravida</h3>
              <p className="text-neutral-500 text-sm mb-2">Ergonomic office chair</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rp 3.000.000</span>
                <span className="text-neutral-400 line-through text-sm">
                  Rp 4.000.000
                </span>
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="group relative bg-white rounded-xl overflow-hidden shadow-sm">
            <div className="relative aspect-square overflow-hidden">
              <img
                src="./src/assets/anh4.png"
                alt="Product 4"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/cart")} // Chuyển đến trang giỏ hàng
                >
                  Thêm vào giỏ hàng
                  
                </button>
                <button
                  className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                  onClick={() => navigate("/singleProduct")} // Chuyển đến trang chi tiết sản phẩm
                >
                  Xem chi tiết sản phẩm
                </button>
              </div>
            </div>
            <div className="p-4">
              <h3 className="font-medium text-lg text-neutral-800">Aether</h3>
              <p className="text-neutral-500 text-sm mb-2">Minimalist bookshelf</p>
              <div className="flex items-center gap-2">
                <span className="font-medium">Rp 5.000.000</span>
                <span className="text-neutral-400 line-through text-sm">
                  Rp 6.500.000
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Danh sách sản phẩm */}
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-6">Danh sách sản phẩm</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Thêm 8 sản phẩm mới */}
          {[...Array(8)].map((_, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-xl overflow-hidden shadow-sm"
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={`./src/assets/anh${(index % 4) + 1}.png`}
                  alt={`Product ${index + 5}`}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center gap-3">
                  <button
                    className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                    onClick={() => navigate("/cart")} // Chuyển đến trang giỏ hàng
                  >
                    Thêm vào giỏ hàng
                    
                  </button>
                  <button
                    className="bg-white text-neutral-800 px-6 py-2 rounded-md hover:bg-neutral-100 transition-colors"
                    onClick={() => navigate("/singleProduct")} // Chuyển đến trang chi tiết sản phẩm
                  >
                    Xem chi tiết sản phẩm
                  </button>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-medium text-lg text-neutral-800">
                  Product {index + 5}
                </h3>
                <p className="text-neutral-500 text-sm mb-2">
                  Description for product {index + 5}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-medium">Rp {index + 5}.000.000</span>
                  <span className="text-neutral-400 line-through text-sm">
                    Rp {(index + 5) * 1.5}.000.000
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomeClient;