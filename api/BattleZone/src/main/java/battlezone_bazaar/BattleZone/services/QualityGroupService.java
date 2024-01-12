package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.models.QualityGroup;
import battlezone_bazaar.BattleZone.repositories.ProductRepository;
import battlezone_bazaar.BattleZone.repositories.QualityGroupRepository;
import battlezone_bazaar.BattleZone.services.IServices.IQualityGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QualityGroupService implements IQualityGroupService {
    private final QualityGroupRepository qualityGroupRepository;
    private final ProductRepository productRepository;

    @Override
    public void saveQualityGroup(String name, String manufacturer, String material, String parameters) {
        Optional<Product> listedProduct = productRepository.findProductByNameAndManufacturer(name, manufacturer);

        if (listedProduct.isPresent()) {
            Product product = listedProduct.get();

            QualityGroup existingQualityGroup = qualityGroupRepository.findByProductsAndMaterialAndParameters(product, material, parameters);

            if (existingQualityGroup == null) {
                // Create a new QualityGroup and associate it with the product
                QualityGroup qualityGroup = new QualityGroup();
                qualityGroup.setMaterial(material);
                qualityGroup.setParameters(parameters);

                // Set the product for the quality group
                qualityGroup.getProducts().add(product);

                // Set the quality group for the product
                product.setQualityGroup(qualityGroup);

                // Save both QualityGroup and Product to the database
                qualityGroupRepository.save(qualityGroup);
                productRepository.save(product);
            }
        }
    }


    @Override
    public void saveQualityGroupIterational(List<ProductDto> productDtos, List<QualityGroupDto> qualityGroupDtos) {
        try {
            for (ProductDto product : productDtos) {
                for (QualityGroupDto qualityGroup : qualityGroupDtos) {
                    this.saveQualityGroup(product.name(), product.manufacturer(), qualityGroup.material(), qualityGroup.parameters());
                }
            }
        } catch (Exception e) {
            throw e;
        }
    }
}
