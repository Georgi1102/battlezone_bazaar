package battlezone_bazaar.BattleZone.services.IServices;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.Product;

import java.util.List;

public interface IProductService {
    public List<Product> getAllProducts();
    public Product saveProduct(ProductDto dto);
    public boolean deleteProduct(String name, String manufacturer);
    public void saveProductIterational(List<ProductDto> records);
}
