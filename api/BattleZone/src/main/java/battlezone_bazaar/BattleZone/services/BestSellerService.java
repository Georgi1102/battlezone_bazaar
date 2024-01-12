package battlezone_bazaar.BattleZone.services;

import battlezone_bazaar.BattleZone.dtos.BestSellerDto;
import battlezone_bazaar.BattleZone.dtos.ProductDto;
import battlezone_bazaar.BattleZone.models.BestSeller;
import battlezone_bazaar.BattleZone.models.Product;
import battlezone_bazaar.BattleZone.repositories.BestSellerRepository;
import battlezone_bazaar.BattleZone.repositories.ProductRepository;
import battlezone_bazaar.BattleZone.services.IServices.IBestSellerService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.YearMonth;
import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class BestSellerService implements IBestSellerService {
    private final BestSellerRepository bestSellerRepository;
    private final ProductRepository productRepository;
    @Override
    public List<BestSeller> getAllBestSellers(){
        return bestSellerRepository.findAll();
    }
    @Override
    public boolean addBestSeller(String name, String manufacturer) {
        Optional<Product> listedProduct = productRepository.findProductByNameAndManufacturer(name, manufacturer);

        if (listedProduct.isPresent()) {
            Product product = listedProduct.get();

            YearMonth currentYearMonth = YearMonth.now();
            var year = currentYearMonth.getYear();
            var month = currentYearMonth.getMonthValue();

            BestSeller existingBestSeller = bestSellerRepository.findByProductAndMonthAndYear(product, month, year);

            if (existingBestSeller == null) {
                BestSeller bestSeller = new BestSeller();
                bestSeller.setMonth(month);
                bestSeller.setYear(year);
                bestSeller.setProduct(product);

                bestSellerRepository.save(bestSeller);

                return true;
            } else {
                return false;
            }
        } else {
            // Product not found.
            return false;
        }
    }
    @Override
    public boolean removeBestSeller(String name, String manufacturer,Integer month, Integer year){
        Optional<Product> listedProduct = productRepository.findProductByNameAndManufacturer(name, manufacturer);

        if (listedProduct.isPresent()) {
            Product product = listedProduct.get();
            BestSeller existingBestSeller = bestSellerRepository.findByProductAndMonthAndYear(product, month, year);
            Optional<BestSeller> entityToDelete = bestSellerRepository.findById(existingBestSeller.getId());
            if (entityToDelete.isPresent()) {
                bestSellerRepository.delete(entityToDelete.get());
                return true;
            }
            return false;
        }
        // If the bestseller is not in the database, return false
        return false;
    }
    @Override
    public void saveBestSellersIterational(List<ProductDto> records) {
        try {
            for (ProductDto record :
                    records) {
                this.addBestSeller(record.name(), record.manufacturer());
            }
        } catch (Exception e) {
            throw e;
        }
    }
}
