package battlezone_bazaar.BattleZone.mappers;

import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING)
public interface ProductMapper {
    @Mapping(target = "name", source = "dto.name")
    @Mapping(target = "description", source = "dto.description")
    @Mapping(target = "quantity", source = "dto.quantity")
    @Mapping(target = "price", source = "dto.price")
    @Mapping(target = "imageUrl", source = "dto.imageUrl")
    Product convertDtoToEntity(ProductDto dto, String name);

}
