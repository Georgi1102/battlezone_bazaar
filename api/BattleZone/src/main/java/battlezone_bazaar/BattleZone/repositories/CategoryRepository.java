package battlezone_bazaar.BattleZone.repositories;

import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {

    Optional<Category> findByName(String name);
}
