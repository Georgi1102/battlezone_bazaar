package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BestSellerRepository extends JpaRepository<BestSeller, Long> {
    BestSeller findByProductAndMonthAndYear(Product product, Integer month, Integer year);
    
    @Query(value = "SELECT * FROM best_seller WHERE month = :month AND year = :year AND product_id = :product_id", nativeQuery = true)
    BestSeller findByProductAndMonthAndYearQueryExample(Long product_id, Integer month, Integer year);
    Optional<BestSeller> findByMonthAndYear(Integer month, Integer year);

    BestSeller findByIdAndProductId(Long id, Long producId);
}
