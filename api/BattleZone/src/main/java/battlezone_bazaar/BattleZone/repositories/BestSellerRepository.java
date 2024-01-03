package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BestSellerRepository extends JpaRepository<BestSeller, Long> {
    BestSeller findByProductAndMonthAndYear(Product product, int month, int year);
}
