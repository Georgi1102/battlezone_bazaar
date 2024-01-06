package battlezone_bazaar.BattleZone.Initializer;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.services.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private final CategoryService categoryService;
    @Override
    public void run(ApplicationArguments args) {
        List<CategoryDto> generalCategories = new ArrayList<>(
                List.of(
                        new CategoryDto("Plastic"),
                        new CategoryDto("Metal"),
                        new CategoryDto("Spring"),
                        new CategoryDto("AEG"),
                        new CategoryDto("GAS"),
                        new CategoryDto("GAS-BLOWBACK")
                )
        );

        categoryService.saveCategoryInterational(generalCategories);
    }
}
