package battlezone_bazaar.BattleZone.Initializer;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.dtos.DiscussionDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;
import battlezone_bazaar.BattleZone.services.*;
import lombok.RequiredArgsConstructor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
@RequiredArgsConstructor
public class DataInitializer implements ApplicationRunner {

    private static final Logger logger = LoggerFactory.getLogger(DataInitializer.class);

    private final CategoryService categoryService;
    private final ProductService productService;
    private final BestSellerService bestSellerService;
    private final QualityGroupService qualityGroupService;
    private final DiscussionService discussionService;

    @Override
    public void run(ApplicationArguments args) {
        try {
            logger.info("Data Initialization Started");

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
            List<QualityGroupDto> mainQualityGroups = new ArrayList<>(
                    List.of(
                            new QualityGroupDto("polymer", "2.0"),
                            new QualityGroupDto("aluminium", "2.5")
                    )
            );
            List<ProductDto> starterProducts = new ArrayList<>(
                    List.of(
                            new ProductDto("Ak-47", "AlfaMarinesEU", "automaticRifle", 5, 1000, "url"),
                            new ProductDto("M4A1-AR", "USA-replica-EU", "automaticRifle", 6, 1300, "url"),
                            new ProductDto("Scout", "USA-Snipers", "sniperRifle", 3, 1650, "url")
                    )
            );

            List<DiscussionDto> defaultDiscussions = new ArrayList<>(
                    List.of(
                            new DiscussionDto("New Rifle", "What do you think about the new G&G rifle?"),
                            new DiscussionDto("Trigger issue", "My AK has a trigger use and I can not shoot."),
                            new DiscussionDto("Grenade pin", "Can you tell me from where I can buy a grenade pin?"),
                            new DiscussionDto("New Bazooka", "What do you think about the new bazooka?"),
                            new DiscussionDto("Stock issue", "My AK has a stock issue."),
                            new DiscussionDto("NVG", "Can you tell me from where I can buy a NVG?"),
                            new DiscussionDto("New Sniper", "What do you think about the new G&G sniper?"),
                            new DiscussionDto("Sight issue", "My AK has a sight but the aim is off."),
                            new DiscussionDto("Grenade", "Can you tell me from where I can buy a grenade?")
                    )
            );

            categoryService.saveCategoryIterational(generalCategories);
            productService.saveProductIterational(starterProducts);
            qualityGroupService.saveQualityGroupIterational(mainQualityGroups);
            bestSellerService.saveBestSellersIterational(starterProducts);
            discussionService.saveDiscussions(defaultDiscussions);

            logger.info("Data Initialization Completed");
        } catch (Exception e) {
            logger.error("Data Initialization Failed", e);
            throw e;
        }
    }
}
