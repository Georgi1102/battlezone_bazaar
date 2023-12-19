package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BestSellerRepository extends JpaRepository<BestSeller, Long> {
}
