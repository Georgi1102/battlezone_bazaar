package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.mappers.CategoryMapper;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.repositories.CategoryRepository;
import battlezone_bazaar.BattleZone.services.IServices.ICategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class CategoryService implements ICategoryService {
    private final CategoryRepository categoryRepository;
    private final CategoryMapper categoryMapper;
    @Override
    public boolean saveCategory(CategoryDto categoryDto) {
        Optional<Category> existingCategory = categoryRepository.findByName(categoryDto.name());
        String name = existingCategory.map(Category::getName).orElse(null);
        Category category = categoryMapper.converDtoToEnity(categoryDto, name);
        if (existingCategory.isPresent()) {
            return false;
        }
        categoryRepository.save(category);
        return true;
    }

    @Override
    public void saveCategoryIterational(List<CategoryDto> records) {
        try {
            for (CategoryDto record:
                    records) {
                this.saveCategory(record);
            }
        }catch (Exception e){
            throw e;
        }

    }
}
