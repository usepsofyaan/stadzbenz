"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/lib/authStore";
import ProductList from "@/components/Admin/ProductList";
import ProductForm from "@/components/Admin/ProductForm";
import { Product } from "@/types";

export default function AdminPage() {
  const router = useRouter();
  const { isLoggedIn, isLoading, logout, checkAuth, user } = useAuthStore();
  const [products, setProducts] = useState<Product[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [loadingProducts, setLoadingProducts] = useState(true);
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      router.push("/login");
    }
  }, [isLoggedIn, isLoading, router]);

  useEffect(() => {
    fetchProducts();
  }, []);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(null), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  const fetchProducts = async () => {
    setLoadingProducts(true);
    try {
      const response = await fetch("/api/admin/products");
      if (!response.ok) throw new Error("Failed to fetch");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setNotification({ type: "error", message: "Gagal memuat produk" });
    } finally {
      setLoadingProducts(false);
    }
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSaveProduct = async () => {
    fetchProducts();
    setShowForm(false);
    setEditingProduct(null);
    setNotification({ type: "success", message: "Produk berhasil disimpan" });
  };

  const handleDeleteProduct = async (id: string) => {
    try {
      const response = await fetch(`/api/admin/products/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Gagal menghapus produk");
      }

      setProducts(products.filter((p) => p.id !== id));
      setNotification({ type: "success", message: "Produk berhasil dihapus" });
    } catch (error: any) {
      console.error("Failed to delete product:", error);
      setNotification({ type: "error", message: error.message || "Gagal menghapus produk" });
    }
  };

  const handleLogout = async () => {
    await logout();
    router.push("/login");
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-gray-600">Loading...</div>
      </div>
    );
  }

  if (!isLoggedIn) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Notification */}
      {notification && <div className={`fixed top-4 right-4 px-6 py-3 rounded-lg text-white z-50 ${notification.type === "success" ? "bg-green-500" : "bg-red-500"}`}>{notification.message}</div>}

      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
              <p className="text-sm text-gray-500 mt-1">Logged in as: {user?.email}</p>
            </div>
            <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition">
              Logout
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Add Product Button */}
        <div className="mb-6">
          <button onClick={handleAddProduct} className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium">
            + Tambah Produk
          </button>
        </div>

        {/* Form Modal */}
        {showForm && (
          <ProductForm
            product={editingProduct}
            onSave={handleSaveProduct}
            onCancel={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
          />
        )}

        {/* Product List */}
        {loadingProducts ? <div className="text-center text-gray-500">Loading products...</div> : <ProductList products={products} onEdit={handleEditProduct} onDelete={handleDeleteProduct} />}
      </main>
    </div>
  );
}
