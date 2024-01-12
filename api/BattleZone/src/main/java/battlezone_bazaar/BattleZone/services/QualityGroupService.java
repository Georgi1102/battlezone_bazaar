package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;
import battlezone_bazaar.BattleZone.mappers.QualityGroupMapper;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.models.QualityGroup;
import battlezone_bazaar.BattleZone.repositories.ProductRepository;
import battlezone_bazaar.BattleZone.repositories.QualityGroupRepository;
import battlezone_bazaar.BattleZone.services.IServices.IQualityGroupService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class QualityGroupService implements IQualityGroupService {
    private final QualityGroupRepository qualityGroupRepository;
    private final ProductRepository productRepository;
    private final QualityGroupMapper qualityGroupMapper;

    @Override
    public boolean saveQualityGroup(QualityGroupDto qualityGroupDto ) {
        Optional<QualityGroup> existingGroup = qualityGroupRepository.findQualityGroupByMaterial(qualityGroupDto.material());

        String material = existingGroup.map(QualityGroup::getMaterial).orElse(null);
        QualityGroup qualityGroup = qualityGroupMapper.convertDtoToEntity(qualityGroupDto, material);

        if (existingGroup.isPresent()) {
            return false;
        }
        qualityGroupRepository.save(qualityGroup);
        return true;
    }


    @Override
    public void saveQualityGroupIterational(List<QualityGroupDto> records) {
        try {
            for (QualityGroupDto record:
                    records) {
                this.saveQualityGroup(record);
            }
        }catch (Exception e){
            throw e;
        }

    }
}
