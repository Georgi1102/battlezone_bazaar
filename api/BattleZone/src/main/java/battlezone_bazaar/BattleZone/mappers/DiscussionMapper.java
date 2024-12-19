package battlezone_bazaar.BattleZone.mappers;

import battlezone_bazaar.BattleZone.dtos.CategoryDto;
import battlezone_bazaar.BattleZone.dtos.DiscussionDto;
import battlezone_bazaar.BattleZone.models.Category;
import battlezone_bazaar.BattleZone.models.Discussion;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)

public interface DiscussionMapper {
    @Mapping(target = "title", source = "dto.title")
    Discussion converDtoToEnity(DiscussionDto dto, String name);
}
