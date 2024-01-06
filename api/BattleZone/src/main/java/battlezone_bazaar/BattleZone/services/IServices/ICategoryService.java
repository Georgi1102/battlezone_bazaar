package battlezone_bazaar.BattleZone.services.IServices;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.models.Category;

import java.util.List;

public interface ICategoryService {
    public boolean saveCategory(CategoryDto categoryDto);

    public void saveCategoryInterational(List<CategoryDto> records);
}
