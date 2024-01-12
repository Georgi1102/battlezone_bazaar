package battlezone_bazaar.BattleZone.services.IServices;

import battlezone_bazaar.BattleZone.dtos.BestSellerDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.BestSeller;

import java.util.List;

public interface IBestSellerService {
    public List<BestSeller> getAllBestSellers();
    public boolean addBestSeller(String name, String manufacturer);
    public boolean removeBestSeller(String name, String manufacturer,Integer month, Integer year);
    public void saveBestSellersIterational(List<ProductDto> records);
}
