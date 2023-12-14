package battlezone_bazaar.BattleZone.dtos;

import java.util.List;
public record ProductDto (String name, String qualityGroup, String description,
                          Integer quantity, Integer price,
                          List<Integer> technicalParameters, String imageUrl ){

}