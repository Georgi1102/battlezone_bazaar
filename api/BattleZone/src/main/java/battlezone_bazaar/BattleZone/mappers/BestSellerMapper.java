package battlezone_bazaar.BattleZone.mappers;

import battlezone_bazaar.BattleZone.dtos.BestSellerDto;
import battlezone_bazaar.BattleZone.models.BestSeller;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface BestSellerMapper {
    @Mapping(target = "month", source = "dto.month")
    @Mapping(target = "year", source = "dto.year")
    BestSeller convertDtoToEntity(BestSellerDto dto, String name);

}
