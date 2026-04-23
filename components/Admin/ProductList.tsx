import { Product } from "@/types";

interface ProductListProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

export default function ProductList({ products, onEdit, onDelete }: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center">
        <p className="text-gray-500">Tidak ada produk. Mulai dengan menambahkan produk baru.</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Foto</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Nama Produk</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Kategori</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Harga</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-900">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y">
            {products.map((product) => (
              <tr key={product.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  {product.image_url ? (
                    <img src={product.image_url} alt={product.name} className="h-12 w-12 object-cover rounded" />
                  ) : (
                    <div className="h-12 w-12 bg-gray-200 rounded flex items-center justify-center">
                      <span className="text-xs text-gray-500">-</span>
                    </div>
                  )}
                </td>
                <td className="px-6 py-4">
                  <div>
                    <p className="font-medium text-gray-900">{product.name}</p>
                    <p className="text-sm text-gray-500 truncate">{product.description}</p>
                  </div>
                </td>
                <td className="px-6 py-4 text-sm text-gray-600">{product.category}</td>
                <td className="px-6 py-4 text-sm font-medium text-gray-900">Rp {product.price?.toLocaleString("id-ID")}</td>
                <td className="px-6 py-4 text-sm space-x-2">
                  <button onClick={() => onEdit(product)} className="inline-block px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition text-xs">
                    Edit
                  </button>
                  <button onClick={() => onDelete(product.id)} className="inline-block px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition text-xs">
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
