import { useParams, Link } from 'react-router-dom';
import CategoryCard from '../../components/CategoryCard/CategoryCard';
import './Category.css';

function Category() {
  const { gender } = useParams();

  return (
    <div className="category">
      <h1>
        {gender.charAt(0).toUpperCase() + gender.slice(1)}'s Section {gender === 'boys' ? '👦' : '👧'}
      </h1>
      <div className="categories">
        <Link to={`/category/${gender}/footwear`}><CategoryCard gender={gender} category="Footwear" /></Link>
        <Link to={`/category/${gender}/clothes`}><CategoryCard gender={gender} category="Clothes" /></Link>
        <Link to={`/category/${gender}/umbrella`}><CategoryCard gender={gender} category="Umbrella" /></Link>
        <Link to={`/category/${gender}/raincoat`}><CategoryCard gender={gender} category="Raincoat" /></Link>
      </div>
    </div>
  );
}

export default Category;
