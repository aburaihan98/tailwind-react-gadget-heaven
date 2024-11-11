import { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import ReactStars from "react-rating-stars-component";
import { useLoaderData } from "react-router-dom";

export default function Analytics() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const [selectedProduct, setSelectedProduct] = useState(null);

  const data = useLoaderData();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.product_title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    const matchesCategory =
      categoryFilter === "all" || product.category === categoryFilter;
    return matchesSearch && matchesCategory;
  });

  const openModal = (product) => {
    setSelectedProduct(product);
    document.getElementById("daisy-modal").showModal();
  };

  const closeModal = () => {
    document.getElementById("daisy-modal").close();
    setSelectedProduct(null);
  };

  return (
    <>
      {
        <Helmet>
          <title>Analytics : Gadget Heaven </title>
        </Helmet>
      }
      <div className="p-6 ">
        <h1 className="text-2xl font-bold mb-4">Product Dashboard</h1>
        <div className="flex gap-4 mb-4">
          <input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded"
          />
          <select
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="all">All Categories</option>
            <option value="computers">Computers</option>
            <option value="phones">Phones</option>
            <option value="smart watches">Smart Watches</option>
            <option value="chargers">Chargers</option>
            <option value="power banks">Power Banks</option>
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {filteredProducts.map((product) => (
            <div
              key={product.product_id}
              className="border rounded p-4 transition-transform transform hover:scale-105"
            >
              <img
                src={product.product_image}
                alt={product.product_title}
                className="mb-2"
              />
              <h2 className="font-semibold">{product.product_title}</h2>
              <p className="text-gray-700">{product.description}</p>
              <p className="font-bold">${product.price}</p>
              <button
                onClick={() => openModal(product)}
                className="mt-2 px-4 py-2 bg-[#9538E2] text-white rounded hover:bg-[#632497] transition"
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id="daisy-modal" className="modal p-8 rounded-xl">
        <form method="dialog" className="modal-box">
          {selectedProduct && (
            <>
              <h2 className="font-semibold text-lg mb-2">
                {selectedProduct.product_title}
              </h2>
              <img
                src={selectedProduct.product_image}
                alt={selectedProduct.product_title}
                className="mb-2 rounded-2xl"
              />
              <p className="text-gray-700 mb-1">
                {selectedProduct.description}
              </p>
              <p className="font-bold mb-1">${selectedProduct.price}</p>
              <p className="font-bold text-lg">Specification:</p>
              {selectedProduct.specification?.map((item, index) => (
                <p key={index} className="text-lg text-[#09080F99]">
                  {index + 1}. {item}
                </p>
              ))}
              <div className="flex items-center gap-3">
                <p className="font-bold text-lg mb-3">Rating:</p>
                <div className="flex gap-3 mb-4">
                  <ReactStars
                    count={5}
                    size={24}
                    value={selectedProduct.rating}
                    isHalf={true}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
              <div className="modal-action">
                <button
                  onClick={closeModal}
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                >
                  Close
                </button>
              </div>
            </>
          )}
        </form>
      </dialog>
    </>
  );
}
