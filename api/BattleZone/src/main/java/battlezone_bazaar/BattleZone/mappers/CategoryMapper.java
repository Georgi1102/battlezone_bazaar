package battlezone_bazaar.BattleZone.mappers;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.models.Category;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)

public interface CategoryMapper {
    @Mapping(target = "name", source = "dto.name")
    Category converDtoToEnity(CategoryDto dto, String name);
}
