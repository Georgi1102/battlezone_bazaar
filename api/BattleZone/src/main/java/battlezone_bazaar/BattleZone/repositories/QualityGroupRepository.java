package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.models.QualityGroup;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QualityGroupRepository extends JpaRepository<QualityGroup, Long> {
    Optional<QualityGroup> findQualityGroupByMaterial(String material);
    Optional<QualityGroup> findQualityGroupByParameters(String parameters);
    QualityGroup findByProductsAndMaterialAndParameters(Product product, String material, String parameters);
}

