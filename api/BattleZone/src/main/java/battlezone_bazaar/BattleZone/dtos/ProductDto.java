package battlezone_bazaar.BattleZone.dtos;

import java.util.List;
public record ProductDto (String name, String description,
                          Integer quantity, Integer price, String imageUrl ){

}