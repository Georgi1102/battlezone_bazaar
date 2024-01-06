package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface BestSellerRepository extends JpaRepository<BestSeller, Long> {
    BestSeller findByProductAndMonthAndYear(Product product, Integer month, Integer year);

    Optional<BestSeller> findByMonthAndYear(Integer month, Integer year);
}
