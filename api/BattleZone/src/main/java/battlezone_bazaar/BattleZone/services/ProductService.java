package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.mappers.ProductMapper;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.repositories.ProductRepository;
import battlezone_bazaar.BattleZone.services.IServices.IProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService implements IProductService {
    private final ProductRepository productRepository;
    private  final ProductMapper productMapper;
    @Override
    public List<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Product saveProduct(ProductDto dto) {
        Optional<Product> dbObject = productRepository.findProductByName(dto.name());
        String name;
        name = dbObject.map(Product::getName).orElse(null);
        Product product = productMapper.convertDtoToEntity(dto, name);
        return productRepository.saveAndFlush(product);
    }
}