package battlezone_bazaar.BattleZone.mappers;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.dtos.QualityGroupDto;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.models.QualityGroup;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface QualityGroupMapper {
    @Mapping(target = "material", source = "dto.material")
    @Mapping(target = "parameters", source = "dto.parameters")
    QualityGroup convertDtoToEntity(QualityGroupDto dto, String name);
}

