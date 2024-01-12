package battlezone_bazaar.BattleZone.services.IServices;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;

import java.util.List;

public interface IQualityGroupService {
    public boolean saveQualityGroup(QualityGroupDto qualityGroupDto);
    public void saveQualityGroupIterational(List<QualityGroupDto> records);
}
