package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.QualityGroup;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QualityGroupRepository extends JpaRepository<QualityGroup, Long> {
}
