package battlezone_bazaar.BattleZone.services.IServices;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;

import java.util.List;

public interface IQualityGroupService {
    public void saveQualityGroup(String name, String manufacturer, String material, String parameters);
    public void saveQualityGroupIterational(List<ProductDto> productDtos, List<QualityGroupDto>qualityGroupDtos);
}
