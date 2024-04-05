import { http } from '@/config/axios.config';

const obtenerCategorias = async () => {
  try {
    const { data } = await http('/categorias');
    return data;
  } catch (error) {
    console.log(error);
  }
};

export default async function CategoriasPage() {
  const categorias = await obtenerCategorias();
  console.log(categorias);
  return (
    <div>
      {categorias.map((categoria: any) => (
        <div key={categoria.id}>
          <select>
            <option value={categoria.id}>{categoria.nombre}</option>
          </select>
        </div>
      ))}
    </div>
  );
}
