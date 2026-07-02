{% comment %}
  Dropshipping Store Builder Funnel Section
  Multi-step product configuration with dynamic pricing
{% endcomment %}

{% liquid
  assign premium_product = all_products[section.settings.premium_product]
  assign custom_product = all_products[section.settings.custom_product]
  assign branded_logo_product = all_products[section.settings.branded_logo_product]
  assign revision_product = all_products[section.settings.revision_product]
  assign extra_products_product = all_products[section.settings.extra_products_product]
  assign fast_delivery_product = all_products[section.settings.fast_delivery_product]
  assign other_niche_product = all_products[section.settings.other_niche_product]
  assign general_niche_product = all_products[section.settings.general_niche_product]
%}

<style>

.mobile-only-form-container {
    display: none;
}

@media screen and (max-width: 1023px) {
    .mobile-only-form-container {
        display: flex;
        justify-content: space-between;
        border: 1px solid #B4B4B4;
        padding: 20px 20px;
        border-radius: 7px;
        margin-top: 20px;
    }
    button#openPopupBtn {
    background: none; 
    border: none;   
    padding: 0;      
    cursor: pointer; 
    color: #056A88; 
    font-size: 14px;  
    font-weight: 700;
    text-decoration: underline; 
}
span.selected_niche_price {
    font-size: 10px;
    color: #0D9488;
    font-weight: 500;
    display: flex;
    justify-content: center;
}
.niche-label{
text-align: center;
}
}
  #shopify-section-{{ section.id }} .funnel-container {
    display: flex;
    gap: 30px;
    padding-left:2%;
    padding-right:2%;
    align-items: flex-start;
  }
  #shopify-section-{{section.id }} .image_sale_badge{
    position: relative;
    max-width: 114px;
    width: 100%;
    right: 8%;
    top: -20px;
    display:none;
  }

  #shopify-section-{{ section.id }} #compareAtPrice {
    font-size: 20px;
    line-height: normal;
    color: red;
    font-weight: 500;
    text-decoration: line-through;
    display: flex !important;
    flex-direction: row !important;
  }

  #shopify-section-{{ section.id }} #totalPriceDisplay {
    font-size: 2.8rem;
    line-height: 140%;
    color: #086c88;
    font-weight: 700;
  }

  #shopify-section-{{ section.id }} .sidebar-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  #shopify-section-{{section.id }} .widget_hr{
    max-width: 80%!important;
    width: 100%;
    margin:15px auto;
    background: #E5E7EB;
  }

  #shopify-section-{{ section.id }} .sidebar-pricing div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  #shopify-section-{{ section.id }} .pkg_description{
    padding: 14px 15px;
    border-radius: 15px;
    border: 1px solid #F3F4F6;
    box-shadow: 0px 0.83px 6.04px -3.62px #0000001A;
    margin-bottom: 15px;
  }


  #shopify-section-{{ section.id }} .dropship-funnel {
    padding-top: 30px;
    background-color:#fff;
    border-radius:10px;
    margin-top:-50px;
    padding-bottom: 50px;
    box-shadow: 4px 6px 25px -13px #086C;
    margin-bottom:50px;
  }

  #shopify-section-{{ section.id }} .selection-summary {
    {% comment %} min-height: 220px; {% endcomment %}
    margin-top: 7px;
    padding: 14px;
    border: 1px solid #40ADAA;
    border-radius: 10px;
    position: relative;
    background: #F8FFFF;
    margin-bottom: 12px;
    box-shadow: 0px 0.83px 6.04px -3.62px #EBFFFE;
  }
  #shopify-section-{{ section.id }}  #selectionList li:not(:last-child){
    {% comment %} border-bottom: 1px solid #ddd; {% endcomment %}
     
  }

  #shopify-section-{{ section.id }} .selection-summary .order_summary_title{
    font-size: 14px;
    font-weight: 600;
    line-height: 16.9px;
    position: absolute;
    {% comment %} background: #ddd; {% endcomment %}
    padding: 7px 5px;
    color: #000;
    border-radius: 6px;
    top: -15px;
    position: static;
    border-bottom:1px solid  #E5E7EB;
  }
  #shopify-section-{{ section.id }} .funnel-left {
    max-width: 66.4%;
    width: 100%;
    flex: 1;
    background: #fff;
    padding: 50px;
    border-radius: 6px;
    box-shadow: 0px 0px 6px 1px #0000001a;
  }

  #shopify-section-{{ section.id }} .funnel-right {
    max-width: 33.6%;
    width: 100%;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 20px;
  }

  #shopify-section-{{ section.id }} .funnel-header {
    margin-bottom: 10px;
  }

  {% comment %} #shopify-section-{{ section.id }} .funnel-header h1 {
    font-size: 2.8rem;
    line-height: normal;
    font-weight: 600;
    margin: 0px;
    letter-spacing: 0px;
  } {% endcomment %}

  #shopify-section-{{ section.id }} .funnel-header p {
    margin: 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  /* Progress Bar */
  #shopify-section-{{ section.id }} .progress-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  #shopify-section-{{ section.id }} .progress-step {
    flex: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  #shopify-section-{{ section.id }} .fast_delivery_enabled {
    height: 40px;
  }

  #shopify-section-{{ section.id }} .progress-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e5e7eb;
    color: #9CA3AF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 9px;
    font-weight: 400;
    font-size: 1.6rem;
    position: relative;
    z-index: 2;
  }

  #shopify-section-{{ section.id }} .progress-step.active .progress-circle,
  #shopify-section-{{ section.id }} .progress-step.completed .progress-circle {
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .progress-label {
    font-size: 1.4rem;
    line-height: 140%;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .progress-step.active .progress-label {
    color: #086c88;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .progress-line {
    position: absolute;
    bottom: 22px;
    left: 0;
    right: 0;
    height: 2.5px;
    background: #e5e7eb;
    z-index: 1;
  }

  #shopify-section-{{ section.id }} .progress-line-fill {
    height: 100%;
    background: #086c88;
    transition: width 0.3s ease;
  }

  /* Step Content */
  #shopify-section-{{ section.id }} .step-content {
    display: none;
  }

  #shopify-section-{{ section.id }} .step-content.active {
    display: block;
  }

  #shopify-section-{{ section.id }} .step-title {
    font-size: 2rem;
    line-height: 140%;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  #shopify-section-{{ section.id }} .collaborator_path {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.4rem;
    line-height: 140%;
    color: #222;
    margin-top: 5px;
  }

  #shopify-section-{{ section.id }} .step-subtitle {
    margin: 0 0 10px 0;
    font-size: 1.6rem;
    line-height: 140%;
  }

  /* Store Type Selection */
  #shopify-section-{{ section.id }} .store-type-options {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }

  #shopify-section-{{ section.id }} .store-type-card {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  #shopify-section-{{ section.id }} .store-type-card:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .store-type-card.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .store-type-icon {
    width: 40px;
    height: 40px;
    background: #086c88;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 5px;
  }

  #shopify-section-{{ section.id }} .store-type-title {
    font-weight: 600;
    margin: 0 0 5px 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .store-type-desc {
    font-size: 1.5rem;
    line-height: 140%;
    margin: 0;
  }

  #shopify-section-{{ section.id }} #selectionList {
    padding: 0px;
    margin-top: 10px;
    font-size: 1.4rem;
    line-height: 160%;
    list-style: none;
    margin-bottom: 0px;
    color: #4B5563;
  }

  #shopify-section-{{ section.id }} .store-type-radio {
    width: 0px;
    height: 0px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  /* Form Fields */
  #shopify-section-{{ section.id }} .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  #shopify-section-{{ section.id }} .form-group {
    flex: 1;
  }

  #shopify-section-{{ section.id }} .form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .form-input {
    width: 100%;
    padding: 5px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1.6rem;
    line-height: 140%;
    transition: border-color 0.3s ease;
  }

  #shopify-section-{{ section.id }} select.form-input {
    padding: 0px 12px;
  }

  #shopify-section-{{ section.id }} .form-input:focus {
    outline: none;
    border-color: #086c88;
  }
  #shopify-section-{{ section.id }} .sale_text{
    font-size: 2.0rem;
    color: #247272;
    text-align: center;
    font-weight: 700;
    line-height: 100%;
    margin: 2rem 0rem;
  }
  #shopify-section-{{ section.id }} .main-compare-price{
    align-items: flex-start!important;
    gap: 3px!important;
    flex-direction: row !important;
   
  }
  #shopify-section-{{ section.id }} .main-compare-price span{
    font-size: 13px;
    font-weight: bold;
    line-height: normal;
    color: #9CA3AF;
  }
  /* Niche Selection */
  #shopify-section-{{ section.id }} .niche-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 20px;
  }

  #shopify-section-{{ section.id }} .niche-option {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 25px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #shopify-section-{{ section.id }} .niche-option:hover {
    border-color: #086c88;
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .niche-option.selected {
    border-color: #086c88;
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .niche-option.selected .selected_niche_price{
    {% comment %} color: #ffe7cf; {% endcomment %}
    font-weight: 700;
  }
  #shopify-section-{{ section.id }} .niche-radio {
    margin-right: 10px;
  }

  #shopify-section-{{ section.id }} .niche-label {
    font-size: 1.6rem;
    line-height: 140%;
    font-weight: 400;
  }

  #shopify-section-{{ section.id }} .error {
    border: 2px solid red !important;
  }

  #shopify-section-{{ section.id }} .niche-option.error {
    outline: 2px solid red;
    border-radius: 6px;
  }

  #shopify-section-{{ section.id }} .niche-other {
    display: flex;
  }

  #shopify-section-{{ section.id }} .niche-other div {
    max-width: 50%;
    width: 100%;
  }

  #shopify-section-{{ section.id }} #other_niche_input {
    padding: 5px 15px;
  }

  #shopify-section-{{ section.id }} .niche-other-input {
    display: none;
  }

  #shopify-section-{{ section.id }} .niche-other.selected .niche-other-input {
    display: block;
  }

  /* Package Selection */
  #shopify-section-{{ section.id }} .package-option {
    position: relative;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }

  #shopify-section-{{ section.id }} .package-option:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .package-option.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .package-left {
    display: flex;
    align-items: center;
    max-width: 70%;
    width: 100%;
    flex: 1;
  }
  #shopify-section-{{ section.id }} .package-price{
    max-width: 20%;
    width: 100%;

  }
  #shopify-section-{{ section.id }} .package-icon {
    width: 40px;
    height: 40px;
    background: #f0f8fc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 20px;
  }

  #shopify-section-{{ section.id }} .package-info h3 {
    margin: 0 0 5px 0;
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .package-info p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 140%;
    min-width: 190px;
  }

  #shopify-section-{{ section.id }} .package-price {
    font-size: 2.8rem;
    line-height: normal;
    font-weight: 700;
    color: #086c88;
    display: flex;
    flex-direction: column;
    {% comment %} align-items: center; {% endcomment %}
    justify-content: center;
  }
  #shopify-section-{{ section.id }} .package-price .compareAtPrice{
    font-size: 1.4rem;
    color: #9CA3AF;
    text-decoration: line-through;
  }
  #shopify-section-{{ section.id }} .package-price .wasttext{
    font-size: 1.4rem;
    color: #9CA3AF;
  }
  #shopify-section-{{ section.id }} .package-badge, #shopify-section-{{ section.id }} .addon-badge {
    background: red;
    color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 1.4rem;
    line-height: normal;
    font-weight: 700;
    text-transform: uppercase;
    position: absolute;
    top: -12px;
    right: 10px;
  }
  #shopify-section-{{ section.id }} .addon-badge {
    background: #3c8ba1;
  }

  #shopify-section-{{ section.id }} .addon-badge.branded {
    background: red;
  }
  /* Add-ons */
  #shopify-section-{{ section.id }} .addon-group {
    margin-bottom: 15px;
  }

  #shopify-section-{{ section.id }} .addon-title {
    font-weight: 600;
    margin: 0 0 15px 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-options {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  #shopify-section-{{ section.id }} .addon-card {
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 200px;
    position: relative;
  }

  #shopify-section-{{ section.id }} .addon-card:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .addon-card.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .addon-card.included {
    background: #f0f8fc;
    border-color: #086c88;
    cursor: default;
  }

  #shopify-section-{{ section.id }} .addon-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  #shopify-section-{{ section.id }} .addon-name {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-price-tag {
    font-weight: 700;
    color: #086c88;
    font-size: 1.6rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-desc {
    font-size: 1.6rem;
    line-height: 140%;
    margin: 0;
  }

  {% comment %} #shopify-section-{{ section.id }} .addon-badge {
    display: inline-block;
    background: #4caf50;
    color: #fff;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 10px;
    line-height: 140%;
    font-weight: 600;
    margin-bottom: 5px;
  } {% endcomment %}

  #shopify-section-{{ section.id }} .addon-quantity {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e5e7eb;
  }

  #shopify-section-{{ section.id }} .quantity-label {
    font-size: 12px;
    line-height: 140%;
    color: #666;
    margin-bottom: 5px;
  }

  #shopify-section-{{ section.id }} .quantity-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    line-height: 140%;
  }

  /* Buttons */
  #shopify-section-{{ section.id }} .button-group {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
  }

  #shopify-section-{{ section.id }} .niche-other-input {
    grid-column: 1/-1;
  }

  #shopify-section-{{ section.id }} .btn {
    padding: 14px 30px;
    border-radius: 6px;
    font-size: 1.6rem;
    line-height: 140%;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  #shopify-section-{{ section.id }} .step-content.active[data-step="1"] .btn-primary {
    flex: 1;
  }

  #shopify-section-{{ section.id }} .btn-primary {
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .btn-primary:hover {
    background: #043340;
  }

  #shopify-section-{{ section.id }} .btn-secondary {
    background: #fff;
    color: #086c88;
    border: 2px solid #086c88;
    padding: 12px 30px;
  }

  #shopify-section-{{ section.id }} .btn-secondary:hover {
    color: #043340;
    border: 2px solid #043340;
    background: #fff;
  }

  /* Right Sidebar */
  #shopify-section-{{ section.id }} .sale-badge {
    background: orange;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 140%;
    position: absolute;
    top: -15px;
    right: 10px;
    justify-content: center;
    min-width: 10%;
     
  }

  #shopify-section-{{ section.id }} .sidebar-title {
    font-size: 15px;
    line-height: 21.73px;
    font-weight: 700;
    margin: 0 0 0px 0;
    padding-bottom: 7px;
    border-bottom:1px solid  #E5E7EB;
  }
  #shopify-section-{{ section.id }} .benefits-list ul{
    padding-left: 0px;
    margin: 10px 0 0px 0;
  }
  #shopify-section-{{ section.id }} .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 0px 0;
  }

  #shopify-section-{{ section.id }} .benefits-list li {
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  #shopify-section-{{ section.id }} .benefits-list li::before {
    content: "✓";
    color: #4caf50;
    font-weight: 700;
    margin-right: 10px;
    font-size: 1.4rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .bonus-item {
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .bonus-item::before {
    content: "★";
    color: #ff9800;
  }

  #shopify-section-{{ section.id }} .price-breakdown {
    border-top: 2px solid #e5e7eb;
    padding-top: 20px;
    margin-top: 20px;
  }

  #shopify-section-{{ section.id }} .price-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 140%;
  }
  #shopify-section-{{ section.id }} #selectionList li{
      display: grid;
      grid-template-columns: 28% 68%;
      gap: 10px;
    }
    #shopify-section-{{ section.id }} #selectionList .fs-label-gray{
      color: #4B5563!important;
    }
  #shopify-section-{{ section.id }} #selectionList .fs-label{
      font-size: 12px;
      font-weight: 600;
      line-height: 14.49px;
      text-align: end;
      color: #086C88;
  }
  #shopify-section-{{ section.id }} .price-row.total {
    font-size: 20px;
    line-height: 140%;
    font-weight: 700;
    color: #086c88;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px solid #e5e7eb;
  }

  #shopify-section-{{ section.id }} .shopify-partner {
    margin-top: 5px;
    text-align: center;
  }

  #shopify-section-{{ section.id }} .shopify-partner img {
    max-width: 180px;
    height: auto;
  }

  /* Media Queries */
  @media (max-width: 1023px) {
    #shopify-section-{{ section.id }} .dropship-funnel {
    padding-top: 30px;
    padding-bottom: 30px;
  }

    #shopify-section-{{ section.id }} .funnel-container {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .funnel-left {
      padding: 20px;
      max-width: 100%;
    }

    #shopify-section-{{ section.id }} .funnel-right {
      padding: 20px;
      max-width: 100%;
      width: 100%;
      position: static;
    }

    #shopify-section-{{ section.id }} .store-type-options {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .form-row {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .niche-grid {
      {% comment %} grid-template-columns: 1fr; {% endcomment %}
    }
  }

  @media screen and (max-width: 625px) {
    #shopify-section-{{ section.id }} .package-left,
    #shopify-section-{{ section.id }} .package-option {
      flex-direction: row;
      {% comment %} align-items: flex-start; {% endcomment %}
      gap: 0px;
      max-width: 100%;
    }
    #shopify-section-{{ section.id }} .package-price{
      max-width: 100%;
    }
    #shopify-section-{{ section.id }} .package-option {
      padding: 15px;
    }

    #shopify-section-{{ section.id }} #totalPriceDisplay {
      font-size: 2.2rem;
    }
    #shopify-section-{{ section.id }} #compareAtPrice {
      font-size: 1.6rem;
    }
    #shopify-section-{{ section.id }} .store-type-title {
      font-size: 13px;
      margin: 0;
    }

    #shopify-section-{{ section.id }} #selectionList,
    #shopify-section-{{ section.id }} .benefits-list li {
      font-size: 1.4rem;
    }


    #shopify-section-{{ section.id }} .niche-label {
      font-size: 1.4rem;
    }

    #shopify-section-{{ section.id }} .package-price {
      margin-top: 20px;
      margin-left: 17px;
      font-size: 14px;
    }

    #shopify-section-{{ section.id }} .form-input,
    #shopify-section-{{ section.id }} .form-label {
      font-size: 1.4rem;
    }

    {% comment %} #shopify-section-{{ section.id }} .funnel-header h1 {
      font-size: 2.4rem;
      margin-bottom: 5px;
    } {% endcomment %}

    #shopify-section-{{ section.id }} .addon-title {
      font-size: 1.6rem;
    }

    #shopify-section-{{ section.id }} .btn {
 padding: 10px 30px;
        font-size: 1.4rem;
      ;
    }

    #shopify-section-{{ section.id }} .step-title,
    #shopify-section-{{ section.id }} .sidebar-title {
      font-size: 1.8rem;
    }

    #shopify-section-{{ section.id }} .funnel-header p {
      font-size: 1.6rem;
    }

    #shopify-section-{{ section.id }} .collaborator_path {
      flex-wrap: wrap;
      font-size: 1.2rem;
    }
  #shopify-section-{{ section.id }} .store-type-card {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center; 
  }
   #shopify-section-{{ section.id }} .store-type-icon {
    width: 40px;
    height: 40px;
    background: #086c88;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 25px;
  }

  #shopify-section-{{ section.id }} .package-info p {
    margin: 0;
    font-weight: 400px;
    font-size: 11px;
    line-height: 140%;
    min-width: 200px;
  }
    #shopify-section-{{ section.id }} .store-type-desc {
    font-size: 10px;
    font-weight: 400px;
    line-height: 140%;
    margin: 0;
  }

    #shopify-section-{{ section.id }} .package-info h3 {
    margin: 0 0 5px 0;
    font-size: 13px;
    line-height: 140%;
    font-weight: 600;
  }
  #shopify-section-{{ section.id }} .package-icon {
    width: 30px;
    height: 30px;
    background: #f0f8fc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    font-size: 20px;
    margin-left: 20px;
    background-color: #F3F4F6;
    padding: 5px 5px;
  }
#shopify-section-{{ section.id }} .main_Price_pkg{
display: flex;
flex-direction: row;
}
 #shopify-section-{{ section.id }} .package-price .compareAtPrice{
    font-size: 12px;
    color: #9CA3AF;
    text-decoration: line-through;
  }
  #shopify-section-{{ section.id }} .package-price .wasttext{
    font-size: 12px;
    color: #9CA3AF;
  }
  #shopify-section-{{ section.id }} .addon-card {
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 200px;
    position: relative;
    display: flex !important;
    flex-direction: row;
    align-items: center;
  }
    #shopify-section-{{ section.id }} .addon-price-tag {
    font-weight: 600;
    color: #374151;
    font-size: 13px;
    line-height: 140%;
    background-color: #F9FAFB;
    border: solid 0.2px #086C88;
    border-radius: 6px;
    padding: 5px 5px;
    margin-left: -7px;
  }

  #shopify-section-{{ section.id }} .addon-name {
    font-weight: 600;
    font-size: 13px;
    line-height: 140%;
  }
  /*Radio*/
.store-type-radio {
  position: absolute;
  opacity: 0; 
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
}
.store-type-card {
  position: relative;
  padding-left: 50px; 
}
.custom-radio-label {
  position: absolute;
  left: 15px; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 
  height: 20px;
  width: 20px;
}
.custom-radio-indicator {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.custom-radio-indicator2 {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.custom-radio-indicator3 {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.package-option.selected .custom-radio-indicator {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.package-option.selected .custom-radio-indicator2 {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.addon-card.selected .custom-radio-indicator3 {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.store-type-radio:checked + .custom-radio-indicator {
  border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}

{% comment %} 
.store-type-radio:checked + .custom-radio-indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 11px; 
  width: 10px;
  border-radius: 50%;
  background-color: white; 
} {% endcomment %}
  }

  {% comment %} Order Summary  {% endcomment %}
   /* Sticky Footer Order Summary */

   {% comment %} Order summary {% endcomment %}
    .modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 10px 20px;
    border: 1px solid #888;
    width: 80%;
    position: relative;
    border-radius: 10px;
    border: 0.6px solid #40ADAA;
}

.close-button {
    display: flex;
    color: #aaa;
    justify-content: right;
    /* float: right; */
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.overlay {
  display: none; /* Hidden by default */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 999; /* Below the modal but above other content */
}

.modal.show, .overlay.show {
  display: block; /* Show when 'show' class is added */
}
.step-indicator{
font-size: 12px;
font-weight: 500;
}

</style>

<div class="dropship-funnel t4s-container">
  <div class="funnel-container">
    <!-- Left Side: Main Form -->
    <div class="funnel-left">
      <div class="funnel-header">
        <h1>{{ section.settings.main_title }}</h1>
        <p>{{ section.settings.main_subtitle }}</p>
      </div>

      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress-line">
          <div class="progress-line-fill" id="progressFill"></div>
        </div>
        <div class="progress-step active" data-step="1">
          <div class="progress-circle">1</div>
          <div class="progress-label">{{ section.settings.step1_label }}</div>
        </div>
        <div class="progress-step" data-step="2">
          <div class="progress-circle">2</div>
          <div class="progress-label">{{ section.settings.step2_label }}</div>
        </div>
        <div class="progress-step" data-step="3">
          <div class="progress-circle">3</div>
          <div class="progress-label">{{ section.settings.step3_label }}</div>
        </div>
        <div class="progress-step" data-step="4">
          <div class="progress-circle">4</div>
          <div class="progress-label">{{ section.settings.step4_label }}</div>
        </div>
      </div>

      {%- form 'product',
        product,
        id: 'dropshipping-hubs-form',
        data-productid: product.id,
        class: 'dropship-hubs-forms',
        novalidate: 'novalidate'
      -%}
        <!-- Step 1: Store Setup -->
        <div class="step-content active" data-step="1">
          <h2 class="step-title">{{ section.settings.step1_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step1_subtitle }}</p>

          <div class="store-type-options">
            <div class="store-type-card selected" data-type="new">
              <label class="custom-radio-label">
      <input type="radio" name="store_type" value="New Store" class="store-type-radio" checked="" autocomplete="on">
      <span class="custom-radio-indicator"></span>
    </label>
              <div class="store-type-icon">
                <img src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Vector_2.svg?v=1763032162">
              </div>
              <div class="store_type_main">
              <h3 class="store-type-title">{{ section.settings.new_store_title }}</h3>
              <p class="store-type-desc">{{ section.settings.new_store_desc }}</p>
              </div>
            </div>
            <div class="store-type-card" data-type="existing">
             <label class="custom-radio-label">
      <input type="radio" name="store_type" value="New Store" class="store-type-radio" >
      <span class="custom-radio-indicator"></span>
    </label>
              <div class="store-type-icon">
                <img src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Frame.svg?v=1763034817">
              </div>
              <div class="store_type_main">
              <h3 class="store-type-title">{{ section.settings.existing_store_title }}</h3>
              <p class="store-type-desc">{{ section.settings.existing_store_desc }}</p>
              </div>
            </div>
          </div>

          <div id="newStoreFields">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.customer_name_label }} *</label>
                <input type="text" name="Customer name" class="form-input" required placeholder="Enter your name">
              </div>
              <div class="form-group">
                <label class="form-label">{{ section.settings.email_label }} *</label>
                <input type="email" name="Email" class="form-input" required placeholder="e.g., John@gmail.com">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.phone_label }} *</label>
                <input type="tel" name="Phone" class="form-input" required placeholder="+1 (567) 123-4567">
              </div>
            </div>
          </div>

          <div id="existingStoreFields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.store_url_label }} *</label>
                <input
                  type="url"
                  name="Store url"
                  class="form-input"
                  placeholder="https://your-store.myshopify.com"
                  required
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.collaborator_code_label }}</label>
                <input type="text" name="Collaborator code" class="form-input" placeholder="Collobrator code">
                <div class="collaborator_path">
                  <div class="step">Shopify admin</div>
                  <div class="arrow">→</div>
                  <div class="step">Settings</div>
                  <div class="arrow">→</div>
                  <div class="step">Users > Security</div>
                  <div class="arrow">→</div>
                  <div class="step">Collaborators code</div>
                </div>
              </div>
            </div>
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 2: Choose Niche -->
        <div class="step-content" data-step="2">
          <h2 class="step-title">{{ section.settings.step2_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step2_subtitle }}</p>

          <div class="niche-grid">
            {% assign nicheOptions = section.settings.niche | split: '||' %}
            {% for option in nicheOptions %}
              {% if option != blank %}
                <div class="niche-option {% if forloop.first %}selected{% endif %}" data-niche="{{option}}">
                  {% comment %} <input
                    type="radio"
                    name="Store Niche"
                    value="{{option}}"
                    class="niche-radio"
                  > {% endcomment %}
             {% assign image_handle = option | handleize %}
             {% assign final_asset_name = image_handle | append: '.png' %}
          <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

                  <label class="niche-label">{{ option }}</label>
                </div>
              {% endif %}
            {% endfor %}
            <div
              class="niche-option niche-general"
              data-niche="general"
              data-product-id="{{ general_niche_product.id }}"
              data-product-variant-id="{{ general_niche_product.selected_or_first_available_variant.id }}"
              data-price="{{ general_niche_product.price }}"
              data-compare-price="{{general_niche_product.compare_at_price }}"
            >
     {% comment %} Code for General Niche Icon {% endcomment %}
            {% assign image_icon_name = 'general-niche' %}
            {% assign final_asset_name = image_icon_name | append: '.png' %}
          <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

              {% comment %} <input type="radio" name="Store Niche" value="general" class="niche-radio"> {% endcomment %}
              <label class="niche-label">
                {{- section.settings.general_niche_label }}
                <span class="selected_niche_price">(+ {{ general_niche_product.price | money }})</span></label
              >
            </div>
            {% comment %} <div
              class="niche-option niche-other"
              data-niche="other"
              data-product-id="{{ other_niche_product.id }}"
              data-product-variant-id="{{ other_niche_product.selected_or_first_available_variant.id }}"
              data-price="{{ other_niche_product.price }}"
              data-compare-price="{{other_niche_product.compare_at_price }}"
            >
        {% comment %} Code for Other Niche Icon {% endcomment %}
             {% assign image_icon_name = 'other-niche' %}
             {% assign final_asset_name = image_icon_name | append: '.png' %}
           <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

              {% comment %} <input type="radio" name="Store Niche" value="Other" class="niche-radio"> {% endcomment %}
              <label class="niche-label">
                {{- section.settings.other_niche_label }}
                <span class="selected_niche_price">(+ {{ other_niche_product.price | money }})</span></label
              >
            </div>
            <div class="niche-other-input">
              <input
                type="text"
                id="other_niche_input"
                name="Other niche"
                class="form-input"
                placeholder="{{ section.settings.other_niche_placeholder }}"
                required
              >
            </div> {% endcomment %}
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 3: Select Package -->
        <div class="step-content" data-step="3">
          <h2 class="step-title">{{ section.settings.step3_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step3_subtitle }}</p>

          <div
            class="package-option selected"
            data-package="premium"
            data-product-id="{{ premium_product.id }}"
            data-product-variant-id="{{ premium_product.selected_or_first_available_variant.id }}"
            data-price="{{ premium_product.price }}"
            data-compare-price="{{premium_product.compare_at_price }}"
          >
             <label class="custom-radio-label">
      <input type="radio" name="store_type2" value="New Store2" class="store-type-radio" checked="" autocomplete="on" >
      <span class="custom-radio-indicator2"></span>
    </label>
            <div class="package-left">
             <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/hdajfhkjda1.png?v=1763977307" alt="Package icon" />
              <div class="package-info">
                <h3>{{ section.settings.premium_package_title }}</h3>
                <p>{{ section.settings.premium_package_desc }}</p>
              </div>
            </div>
            <div class="package-price">
              <div class="main_Price_pkg">
                {% if premium_product.compare_at_price > premium_product.price -%}
                  <span class="wasttext"> WAS </span>
                {%- endif -%}
                <span class="compareAtPrice">${{ premium_product.compare_at_price | money_without_currency }} </span>
              </div>
              <span>${{ premium_product.price | money_without_currency }} </span>
            </div>
          </div>

          <div
            class="package-option"
            data-package="custom"
            data-product-id="{{ custom_product.id }}"
            data-product-variant-id="{{ custom_product.selected_or_first_available_variant.id }}"
            data-price="{{ custom_product.price }}"
            data-compare-price="{{custom_product.compare_at_price }}"
          >
             <label class="custom-radio-label">
      <input type="radio" name="store_type2" value="New Store2" class="store-type-radio">
      <span class="custom-radio-indicator2"></span>
    </label>
            <span class="package-badge">{{ section.settings.popular_badge_text }}</span>
            <div class="package-left">
              <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/pen.png?v=1763977347" alt="Package icon" />
              <div class="package-info">
                <h3>
                  {{ section.settings.custom_package_title }}
                </h3>
                <p>{{ section.settings.custom_package_desc }}</p>
              </div>
            </div>
            <div class="package-price">
              <div class="main_Price_pkg">
                {% if custom_product.compare_at_price > custom_product.price -%}
                  <span class="wasttext"> WAS </span>
                {%- endif -%}
                <span class="compareAtPrice">${{ custom_product.compare_at_price | money_without_currency }} </span>
              </div>
              <span>${{ custom_product.price | money_without_currency }} </span>
            </div>
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 4: Add-ons -->
        <div class="step-content" data-step="4">
          <h2 class="step-title">{{ section.settings.step4_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step4_subtitle }}</p>

          <!-- Logo Design -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.logo_section_title }}</h3>
            <div class="addon-options">
        
              <div class="addon-card" data-addon="standard-logo">
                <div class="addon-badge">{{ section.settings.included_text }}</div>
                               <label class="custom-radio-label">
      <input type="radio" name="store_type3" value="New Store3" class="store-type-radio" checked="" autocomplete="on" >
      <span class="custom-radio-indicator3"></span>
    </label>
     <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Frame_2_2.png?v=1763984070" alt="Package icon" />
               <div class="package-info">
                <div class="addon-header">
                  <div class="addon-name">{{ section.settings.standard_logo_title }}</div>
                </div>
                <p class="addon-desc">{{ section.settings.standard_logo_desc }}</p>
              </div>
              </div>
              <div
                class="addon-card"
                data-addon="branded-logo"
                data-product-id="{{ branded_logo_product.id }}"
                data-product-variant-id="{{ branded_logo_product.selected_or_first_available_variant.id }}"
                data-price="{{ branded_logo_product.price }}"
                data-compare-price="{{branded_logo_product.compare_at_price }}"
              >
                    <label class="custom-radio-label">
      <input type="radio" name="store_type3" value="New Store3" class="store-type-radio" >
      <span class="custom-radio-indicator3"></span>
    </label>
    <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/hdajfhkjda1.png?v=1763977307" alt="Package icon" />
             <div class="package-info">   
    <div class="addon-badge branded">{{ section.settings.popular_badge_text }}</div>
                
                <div class="addon-header">
                  <div class="addon-name">{{ section.settings.branded_logo_title }}</div>
                  
                </div>
                <p class="addon-desc">{{ section.settings.branded_logo_desc }}</p>
              </div>
              <div class="addon-price-tag">+${{ branded_logo_product.price | money_without_currency }}</div>
              </div>
            </div>
          </div>

          <!-- Product Revisions (dropdown) -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.revision_section_title }}</h3>
            {% if section.settings.revision_desc != blank %}
              <label class="form-label">{{ section.settings.revision_desc }}</label>
            {% endif %}
            <select id="revisionSelect" class="form-input">
              <option value="">1 Basic Revision (included)</option>
              {% for variant in revision_product.variants %}
                <option
                  data-value="{{variant.title }}"
                  value="{{ variant.id }}"
                  data-price="{{ variant.price }}"
                  data-compare-price="{{variant.compare_at_price }}"
                  data-product-variant-id="{{ variant.id }}"
                >
                  {{ variant.title }}
                  {% unless forloop.first %} (+ ${{ variant.price | money_without_currency }}){% endunless %}
                </option>
              {% endfor %}
            </select>
          </div>

          <!-- Extra Products (dropdown) -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.products_section_title }}</h3>
            {% if section.settings.products_included_text != blank %}
              <label class="form-label">{{ section.settings.products_included_text }}</label>
            {% endif %}
            <select id="extraProductSelect" class="form-input">
              {% for variant in extra_products_product.variants %}
                <option
                  value="{{ variant.id }}"
                  data-price="{{ variant.price }}"
                  data-compare-price="{{variant.compare_at_price }}"
                  data-product-variant-id="{{ variant.id }}"
                >
                  {{ variant.title }}
                  {% unless forloop.first %} (+${{ variant.price | money_without_currency }}) {% endunless %}
                </option>
              {% endfor %}
            </select>
          </div>

          <!-- Fast Delivery -->
          <div class="addon-group fast_delivery_enabled">
            <label class="form-label" style="display:flex;align-items:center;gap:8px;">
              <input
                type="checkbox"
                id="fastDeliveryCheckbox"
                data-product-variant-id="{{ fast_delivery_product.selected_or_first_available_variant.id }}"
                data-product-id="{{ fast_delivery_product.id }}"
                data-price="{{ fast_delivery_product.price }}"
                data-compare-price="{{fast_delivery_product.compare_at_price }}"
              >
              {{ section.settings.fast_delivery_title }} +${{ fast_delivery_product.price | money_without_currency }}
            </label>
            {% if section.settings.terms_and_conditions_applied != blank %}
              <div class="terms_and_conditions" style="display: none">
                {{ section.settings.terms_and_conditions_applied }}
              </div>
            {% endif %}
          </div>
          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="addToCart()">
              {{ section.settings.add_to_cart_text }}
            </button>
          </div>
        </div>
      {% endform %}
      
 <div class="mobile-only-form-container">
<div class="step-indicator" id="summaryStepIndicator">Step 1: Store Setup</div>
 <button id="openPopupBtn">Order Summary</button>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <div class="button-group">
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>
</div>
</div>
</div>
<script>
    /* =========================
    SELECTION SUMMARY
========================= */
function renderSelectionSummary() {
    const closeButton = document.querySelector('.close-button');
    if (!closeButton) {
        console.error('Target element .close-button not found.');
        return;
    }
    let box = document.createElement('div');
    box.className = 'selection-summary';
    box.innerHTML = `<h3 class="order_summary_title">Order summary</h3>
                     <ul id="selectionList"></ul>`;
    closeButton.after(box);
    const list = box.querySelector('#selectionList');
}
if (window.innerWidth < 769) {
    console.log('test');
    document.addEventListener('DOMContentLoaded', renderSelectionSummary);
}
</script>


    <!-- Right Side: Summary -->
    <div class="funnel-right">
      <!-- Pricing Section -->

      <div class="sidebar-pricing">
        {% assign compare_price = premium_product.compare_at_price | divided_by: 100.0 %}
        {% assign total_price = premium_product.price | divided_by: 100.0 %}

        <div>
          <div class="main-compare-price">
            {% if compare_price > 0 %}
              <span>WAS</span>
            {% else %}

            {% endif %}
            {% if compare_price > 0 %}
              <div id="compareAtPrice">${{ compare_price }}</div>
            {% else %}
              <div id="compareAtPrice" style="display:none;"></div>
            {% endif %}
          </div>
          <div id="totalPriceDisplay">${{ total_price }}</div>
        </div>
        {% if section.settings.source == 'text' %}
          {% if section.settings.sale_badge_text != blank %}
            <div class="sale-badge">{{ section.settings.sale_badge_text }}</div>
          {% endif %}
        {% else %}
          {% if section.settings.image_icon != blank %}
            <div class="image_sale_badge"><img src="{{ section.settings.image_icon | img_url: 'master'}}"></div>
          {% endif %}
        {% endif %}
      </div>

      {% if section.settings.sales_related_text != blank %}
        <div class="sale_text">{{ section.settings.sales_related_text }}</div>
      {% endif %}
      {% if premium_product.description != blank %}
        <div class="pkg_description premium-description">
          <h3 class="sidebar-title">{{ section.settings.sidebar_title }}</h3>
          <div class="benefits-list">
            {{ premium_product.description }}
          </div>
        </div>
      {% endif %}

      {% if custom_product.description != blank %}
        <div class="pkg_description custom-description" style="display:none;">
          <h3 class="sidebar-title">{{ section.settings.sidebar_title }}</h3>
          <div class="benefits-list">
            {{ custom_product.description }}
          </div>
        </div>
      {% endif %}
      <hr class="widget_hr">
      <div class="shopify-partner">
        {% if section.settings.partner_logo %}
          <img src="{{ section.settings.partner_logo | img_url: '200x' }}" alt="Shopify Partners">
        {% else %}
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
            alt="Shopify Partners"
          >
        {% endif %}
      </div>
    </div>
  </div>
</div>
<script>
let currentStep = 1;
let selectedPackage = 'premium';
let basePrice = {{ premium_product.price | divided_by: 100.0 }};
let comparePrice = {{ premium_product.compare_at_price | divided_by: 100.0 }};
let selectedAddons = {};
let selectedNicheType = null;

// Cache original logo texts
let originalStandardLogoTitle = "";
let originalStandardLogoDesc = "";
let brandedLogoTitle = "{{ section.settings.branded_logo_title }}";
let brandedLogoDesc = "{{ section.settings.branded_logo_desc }}";

document.addEventListener('DOMContentLoaded', () => {
  const standardCard = document.querySelector('[data-addon="standard-logo"]');
  if (standardCard) {
    originalStandardLogoTitle =
      standardCard.querySelector('.addon-name')?.textContent.trim() || "";
    originalStandardLogoDesc =
      standardCard.querySelector('.addon-desc')?.textContent.trim() || "";
  }

  updateProgressBar();
  setupStoreTypeToggle();
  setupNicheSelection();
  setupPackageSelection();
  setupLogoSelection();   // IMPORTANT
  setupAddonSelection();
  updatePriceSummary();
  renderSelectionSummary();
  setupStepClicking();
  updatePackageDescription(); 
});

/* =========================
   STORE TYPE
========================= */
function setupStoreTypeToggle() {
  document.querySelectorAll('.store-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.store-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      card.querySelector('.store-type-radio').checked = true;

      const type = card.dataset.type;
      document.getElementById('newStoreFields').style.display = type === 'new' ? 'block' : 'none';
      document.getElementById('existingStoreFields').style.display = type === 'existing' ? 'block' : 'none';

      renderSelectionSummary();
    });
  });
}

/* =========================
   RADIO LOGO SELECTION
========================= */
function setupLogoSelection() {
  const standard = document.querySelector('[data-addon="standard-logo"]');
  const branded = document.querySelector('[data-addon="branded-logo"]');

  function selectLogo(type) {
    standard.classList.remove('selected');
    branded.classList.remove('selected');

    delete selectedAddons['logo']; // always store logo selection under one key

    if (type === 'standard') {
      standard.classList.add('selected');
      selectedAddons['logo'] = {
        type: 'standard',
        name: standard.querySelector('.addon-name').textContent.trim(),
        price: 0,
        isProduct: false
      };
    }

    if (type === 'branded') {
      branded.classList.add('selected');
      selectedAddons['logo'] = {
        type: 'branded',
        name: '{{ section.settings.branded_logo_title }}',
        price: parseFloat(branded.dataset.price) / 100,
        isProduct: true,
        variantId: parseInt(branded.dataset.productVariantId)
      };
    }

    updatePriceSummary();
    renderSelectionSummary();
  }

  window.selectLogo = selectLogo;

  // Default select standard
  selectLogo('standard');

  // Event Listeners
  standard.addEventListener('click', () => {
    if (selectedNicheType !== 'other') selectLogo('standard');
  });

  branded.addEventListener('click', () => {
    if (selectedNicheType !== 'other') selectLogo('branded');
  });
}

/* =========================
   NICHE SELECTION
========================= */
function setupNicheSelection() {
  document.querySelectorAll('.niche-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.niche-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      option.querySelector('.niche-radio').checked = true;

      const nicheValue = option.getAttribute('data-niche');
      selectedNicheType = option.classList.contains('niche-other')
        ? 'other'
        : option.classList.contains('niche-general')
        ? 'general'
        : nicheValue;

      document.querySelectorAll('.niche-other-input').forEach(el => el.style.display = 'none');
      if (option.classList.contains('niche-other')) {
        document.querySelector('.niche-other-input').style.display = 'block';
      }

      const price = parseFloat(option.dataset.price || 0) / 100;
      const cmp = option.dataset.comparePrice ? parseFloat(option.dataset.comparePrice) / 100 : 0;

      if (selectedNicheType === 'other') {
        basePrice = price;
        comparePrice = cmp;
        selectedPackage = null;
        document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));
        applyOtherNicheLogoBehavior(true);
      }
      else {
        const premiumPkg = document.querySelector('.package-option[data-package="premium"]');
        if (premiumPkg) {
          document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));
          premiumPkg.classList.add('selected');
          selectedPackage = 'premium';
          basePrice = parseFloat(premiumPkg.dataset.price) / 100;
          comparePrice = premiumPkg.dataset.comparePrice ? parseFloat(premiumPkg.dataset.comparePrice) / 100 : 0;
        }
        applyOtherNicheLogoBehavior(false);
      }

      updateRevisionOptions(selectedNicheType);

      updatePriceSummary();
      renderSelectionSummary();
      updatePackageDescription();  
    });
  });
}

/* =========================
   OTHER NICHE LOGO TRANSFORM
========================= */
function applyOtherNicheLogoBehavior(isOtherNiche) {
  const standardLogo = document.querySelector('[data-addon="standard-logo"]');
  const brandedLogo = document.querySelector('[data-addon="branded-logo"]');

  const nameEl = standardLogo.querySelector('.addon-name');
  const descEl = standardLogo.querySelector('.addon-desc');

  if (isOtherNiche) {
    nameEl.textContent = brandedLogoTitle;
    descEl.textContent = brandedLogoDesc;
    brandedLogo.style.display = 'none';

    window.selectLogo('standard'); // forced only option

  } else {
    nameEl.textContent = originalStandardLogoTitle;
    descEl.textContent = originalStandardLogoDesc;
    brandedLogo.style.display = 'block';

    window.selectLogo('standard');
  }
}


/* =========================
   CUSTOM PACKAGE LOGO TRANSFORM
========================= */
function applyCustomPackageLogoBehavior(isCustom) {
  const standardLogo = document.querySelector('[data-addon="standard-logo"]');
  const brandedLogo = document.querySelector('[data-addon="branded-logo"]');

  const nameEl = standardLogo.querySelector('.addon-name');
  const descEl = standardLogo.querySelector('.addon-desc');

  if (isCustom) {
    // Change Standard → Branded
    nameEl.textContent = brandedLogoTitle;
    descEl.textContent = brandedLogoDesc;

    // Hide branded card because standard IS branded now
    brandedLogo.style.display = 'none';

    // Force select standard (now branded)
    window.selectLogo('standard');

  } else {
    // Restore standard logo name + desc
    nameEl.textContent = originalStandardLogoTitle;
    descEl.textContent = originalStandardLogoDesc;

    // Restore branded logo option
    brandedLogo.style.display = 'block';

    // Reset to default standard logo
    window.selectLogo('standard');
  }
}


/* =========================
   PACKAGE SELECTION
========================= */
function setupPackageSelection() {
  document.querySelectorAll('.package-option').forEach(pkg => {
    pkg.addEventListener('click', () => {
      if (selectedNicheType === 'other') return;

      document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));

      pkg.classList.add('selected');
      selectedPackage = pkg.dataset.package;
      if (selectedPackage === "custom") {
          applyCustomPackageLogoBehavior(true);
          updateRevisionOptions("custom"); 
      } else {
          applyCustomPackageLogoBehavior(false);
          updateRevisionOptions(selectedNicheType);
      }
      basePrice = parseFloat(pkg.dataset.price) / 100;
      comparePrice = pkg.dataset.comparePrice ? parseFloat(pkg.dataset.comparePrice) / 100 : 0;

      updatePriceSummary();
      renderSelectionSummary();
      updatePackageDescription();  
    });
  });
}
/* =========================
Pkg Descriptions
========================= */
function updatePackageDescription() {
  const premiumDesc = document.querySelector(".premium-description");
  const customDesc = document.querySelector(".custom-description");

  if (!premiumDesc || !customDesc) return;

  // CASE 1: OTHER NICHE SELECTED → always show custom pkg description
  if (selectedNicheType === "other") {
    premiumDesc.style.display = "none";
    customDesc.style.display = "block";
    return;
  }

  // CASE 2: NORMAL NICHE → follow selected package
  const selectedPkg = document.querySelector(".package-option.selected");

  if (selectedPkg?.dataset.package === "custom") {
    premiumDesc.style.display = "none";
    customDesc.style.display = "block";
  } else {
    premiumDesc.style.display = "block";
    customDesc.style.display = "none";
  }
}


/* =========================
   ADD-ONS
========================= */
function setupAddonSelection() {

  /* ----------------------------
     GENERAL NICHE PRICE HANDLING
  -----------------------------*/
  const generalNicheOption = document.querySelector('.niche-option.niche-general');

  document.querySelectorAll('.niche-option').forEach(option => {
    option.addEventListener('click', () => {

      // If GENERAL is selected → add price
      if (option.classList.contains('niche-general')) {
        const price = parseFloat(option.dataset.price) / 100;
        const cmp   = option.dataset.comparePrice ? parseFloat(option.dataset.comparePrice) / 100 : 0;

        selectedAddons['general-niche'] = {
          name: "General Niche",
          price: price,
          compare: cmp
        };

      } else {
        // If ANYTHING ELSE is selected → remove general niche addon
        delete selectedAddons['general-niche'];
      }

      updatePriceSummary();
      renderSelectionSummary();
    });
  });

  /* --------------------------------
     EXISTING ADDON LOGIC (unchanged)
  --------------------------------*/
  const revSel = document.getElementById('revisionSelect');
  revSel?.addEventListener('change', () => {
    const opt = revSel.selectedOptions[0];

    if (opt?.value) {
      selectedAddons['revision'] = {
        name:  opt.textContent.split('(')[0].trim(),
        price: parseFloat(opt.dataset.price) / 100,
        variantId: parseInt(opt.value)
      };
    } else delete selectedAddons['revision'];

    updatePriceSummary();
    renderSelectionSummary();
  });

  const extraSel = document.getElementById('extraProductSelect');
  extraSel?.addEventListener('change', () => {
    const opt = extraSel.selectedOptions[0];
    if (opt?.value) {
      selectedAddons['products'] = {
        name: opt.textContent.split('(')[0].trim(),
        price: parseFloat(opt.dataset.price) / 100,
        variantId: parseInt(opt.value)
      };
    } else delete selectedAddons['products'];

    updatePriceSummary();
    renderSelectionSummary();
  });

  const fast = document.getElementById('fastDeliveryCheckbox');
  fast?.addEventListener('change', () => {
    if (fast.checked) {
      selectedAddons['skip-line'] = {
        name: '{{ section.settings.fast_delivery_title }}',
        price: parseFloat(fast.dataset.price) / 100,
        variantId: parseInt(fast.dataset.productVariantId)
      };
      document.querySelector('.terms_and_conditions').style.display = "block";
    } else {
      delete selectedAddons['skip-line'];
      document.querySelector('.terms_and_conditions').style.display = "none";
    }

    updatePriceSummary();
    renderSelectionSummary();
  });
}

/* =========================
   REVISION OPTIONS
========================= */
function updateRevisionOptions(selectedNicheType) {
  const revSel = document.getElementById('revisionSelect');
  if (!revSel) return;

  const noRevisionOption = revSel.querySelector('option[value=""]');
  const OneRevisionOption = revSel.querySelector('option[data-value="1 Revision"]');
  const includedRevisionOption = [...revSel.options].find(
    o => o.textContent.trim().startsWith("1 Revision (Included)")
  );

  // Always reset visibility first
  if (noRevisionOption) noRevisionOption.style.display = "block";
  if (OneRevisionOption) OneRevisionOption.style.display = "block";
  if (includedRevisionOption) includedRevisionOption.style.display = "block";

  /* ============================================================
     CASE 1: OTHER NICHE OR CUSTOM PACKAGE
     → Same rule: auto-apply 1 Revision (Included)
  ============================================================ */
  if (selectedNicheType === "other" || selectedNicheType === "custom") {

    if (noRevisionOption) noRevisionOption.style.display = "none";
    if (OneRevisionOption) OneRevisionOption.style.display = "none";

    // Select the included revision by default
    const firstVariant = revSel.querySelector('option:not([value=""])');
    if (firstVariant) {
      revSel.value = firstVariant.value;
      revSel.dispatchEvent(new Event("change"));
    }
    return; // Stop here
  }

  /* ============================================================
     CASE 2: ALL NORMAL NICHES
     → Hide "1 Revision Included"
     → Reset selector
  ============================================================ */
  if (includedRevisionOption) includedRevisionOption.style.display = "none";

  revSel.value = "";
  revSel.dispatchEvent(new Event("change"));
}


/* =========================
   PRICE SUMMARY
========================= */
function updatePriceSummary() {
  const totalEl = document.getElementById('totalPriceDisplay');
  const compareEl = document.getElementById('compareAtPrice');

  let total = basePrice;
  let cmp = comparePrice;

  if (selectedAddons['logo']) {
    total += selectedAddons['logo'].price;
    cmp += selectedAddons['logo'].price;
  }

  for (const key in selectedAddons) {
    if (key !== 'logo') {
      total += selectedAddons[key].price || 0;
      cmp += selectedAddons[key].price || 0;
    }
  }

  totalEl.textContent = `Now $${total.toFixed(2)}`;

  if (cmp > total) {
    compareEl.style.display = 'block';
    compareEl.textContent = `$${cmp.toFixed(2)}`;
  } else {
    compareEl.style.display = 'none';
  }
}

/* =========================
   CART ADD
========================= */



async function addToCart() {
  let items = [];

  const getId = el => (el?.dataset?.productVariantId ? parseInt(el.dataset.productVariantId) : null);

  const name = document.querySelector('input[name="Customer name"]')?.value || '';
  const email = document.querySelector('input[name="Email"]')?.value || '';
  const phone = document.querySelector('input[name="Phone"]')?.value || '';
  const storeUrl = document.querySelector('input[name="Store url"]')?.value || '';
  const collaboratorCode = document.querySelector('input[name="Collaborator code"]')?.value || '';
  const selectedNicheLabel = document.querySelector('.niche-option.selected .niche-label')?.textContent || '';

  let properties = {
    "Customer Name": name,
    "Email": email,
    "Phone": phone,
    "Store URL": storeUrl,
    "Collaborator Code": collaboratorCode,
    "Selected Niche": selectedNicheLabel
  };

  if (selectedAddons['logo']) {
    properties["Logo Option"] = selectedAddons['logo'].name;
  }

  // main product selection
  const other = document.querySelector('.niche-option.niche-other.selected');
  const general = document.querySelector('.niche-option.niche-general.selected');
  const pkg = document.querySelector('.package-option.selected');


  if (selectedNicheType === 'other' && other) {
    const id = getId(other);
    if (id) items.push({ id, quantity: 1, properties });
  } 
  else if (pkg) {
    const id = getId(pkg);
    if (id) items.push({ id, quantity: 1, properties });
  }

  if (selectedNicheType === 'general' && general) {
    const id = getId(general);
    if (id) items.push({ id, quantity: 1 });
  }
  // Branded logo product if selected
  if (selectedAddons['logo']?.isProduct) {
    items.push({ id: selectedAddons['logo'].variantId, quantity: 1 });
  }

  // revision
  if (selectedAddons['revision']) {
    items.push({ id: selectedAddons['revision'].variantId, quantity: 1 });
  }

  // extra product
  if (selectedAddons['products']) {
    items.push({ id: selectedAddons['products'].variantId, quantity: 1 });
  }

  // fast delivery
  if (selectedAddons['skip-line']) {
    items.push({ id: selectedAddons['skip-line'].variantId, quantity: 1 });
  }

  items = items.reverse();

  try {
    await fetch('/cart/clear.js', { method: 'POST' });
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    });

    const params = new URLSearchParams();
    if (email) params.append('checkout[email]', email);
    if (name) params.append('checkout[shipping_address][first_name]', name);
    if (phone) params.append('checkout[shipping_address][phone]', phone);

    window.location.href = `/checkout?${params.toString()}`;

  } catch (err) {
    alert('Error adding to cart.');
  }
}


/* =========================
   SELECTION SUMMARY
========================= */
function renderSelectionSummary() {
  let box = document.querySelector('.selection-summary');
  if (!box) {
    box = document.createElement('div');
    box.className = 'selection-summary';
    box.innerHTML = `<ul id="selectionList"></ul>`;
    const saleBadge = document.querySelector('.sale_text');
    saleBadge.insertAdjacentElement('afterend', box);
  }

  const list = box.querySelector('#selectionList');
  list.innerHTML = "";


  /* =============================
     PACKAGE — STANDARD
  ============================= */
  const selectedPackageEl = document.querySelector(".package-option.selected");

  // SHOW normal package ONLY if NOT other niche
  if (selectedPackageEl && selectedNicheType !== "other") {
    const pkgName = selectedPackageEl.querySelector("h3")?.textContent.trim() || "";
    const pkgPrice = selectedPackageEl.dataset.price
      ? (parseFloat(selectedPackageEl.dataset.price) / 100).toFixed(2)
      : "0.00";

    list.innerHTML += `
      <li>
        <b>Package:</b>
        <span class="fs-label">${pkgName} (+ $${pkgPrice})</span>
      </li>`;
  }

  /* =============================
     PACKAGE — SPECIAL CASE (OTHER NICHE)
     Show CUSTOM BRAND PACKAGE
  ============================= */
  if (selectedNicheType === "other") {
    const customPkg = document.querySelector('.package-option[data-package="custom"]');
    if (customPkg) {
      const pkgName = customPkg.querySelector("h3")?.textContent.trim() || "Custom Brand Package";
      const pkgPrice = customPkg.dataset.price
        ? (parseFloat(customPkg.dataset.price) / 100).toFixed(2)
        : "0.00";

      list.innerHTML += `
        <li>
          <b>Package:</b>
          <span class="fs-label">${pkgName} (+ $${pkgPrice})</span>
        </li>`;
    }
  }

  

  /* =============================
     NICHE
  ============================= */
  const nicheLabel = document.querySelector('.niche-option.selected .niche-label')?.textContent || "";
  const nicheSplit = nicheLabel.split("(")[0].trim();

  const nicheAddon = selectedAddons["general-niche"];
  const nichePriceText = nicheAddon
    ? (nicheAddon.price > 0 ? `+$${nicheAddon.price.toFixed(2)}` : "Included")
    : "Included";

  if (nicheLabel) {
    list.innerHTML += `
      <li>
        <b>Niche:</b>
        <span class="fs-label">${nicheSplit} (${nichePriceText})</span>
      </li>`;
  }

  
  addDefaultOrSelected("products", "20 Products", "(Included)");
  /* =============================
     LOGO
  ============================= */
  const logoObj = selectedAddons["logo"];
  if (logoObj) {
    const logoPriceText =
      logoObj.price > 0 ? `+$${logoObj.price.toFixed(2)}` : "Included";

    list.innerHTML += `
      <li>
        <b>Logo:</b>
        <span class="fs-label fs-label-gray">${logoObj.name} (${logoPriceText})</span>
      </li>`;
  }

  /* ===================================================
     DEFAULT ITEM HANDLER
  =================================================== */

  function addDefaultOrSelected(key, defaultName, defaultPriceText) {
    if (selectedAddons[key]) {
      const addon = selectedAddons[key];
      const addonPrice =
        addon.price > 0 ? `(+$ ${addon.price.toFixed(2)})` : "(Included)";

      list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label">${addon.name} ${addonPrice} </span>
        </li>`;
    } else {
      if( key === 'products'){
        list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label">${defaultName} ${defaultPriceText}</span>
        </li>`;
      
      }else{
        list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label  fs-label-gray">${defaultName} ${defaultPriceText}</span>
        </li>`;
      }
      
    }
  }

  /* =============================
     DEFAULTS
  ============================= */
  addDefaultOrSelected("revision", "1 Basic Revision (Included)", " ");
  addDefaultOrSelected("skip-line", "No", " ");

  /* =============================
     PAID ADDONS (NO DUPLICATION)
  ============================= */
  for (const key in selectedAddons) {
    if (["logo", "general-niche", "revision", "skip-line", "products"].includes(key)) continue;

    const addon = selectedAddons[key];
    const addonPriceText =
      addon.price > 0 ? `+$${addon.price.toFixed(2)}` : "Included";

    list.innerHTML += `
      <li>
        <b style="text-transform:capitalize">${key}:</b>
        <span class="fs-label">${addon.name} (+ ${addonPriceText}) </span>
      </li>`;
  }
}



/* =========================
   STEPS
========================= */

function nextStep() {
  if (!validateStep(currentStep)) return;

  if (currentStep === 2 && selectedNicheType === 'other') {
    currentStep = 4;
  } else if (currentStep < 4) {
    currentStep++;
  }

  showStep(currentStep);
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep() {
  if (currentStep === 4 && selectedNicheType === 'other') {
    currentStep = 2;
  } else if (currentStep > 1) {
    currentStep--;
  }

  showStep(currentStep);
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStep(step) {
  document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
  document.querySelector(`.step-content[data-step="${step}"]`).classList.add('active');
}

function updateProgressBar() {
  const steps = document.querySelectorAll('.progress-step');
  const fill = document.getElementById('progressFill');
  steps.forEach((s, i) => {
    const n = i + 1;
    s.classList.toggle('completed', n < currentStep);
    s.classList.toggle('active', n === currentStep);
  });
  fill.style.width = (currentStep / steps.length) * 100 + '%';
}

// Clicking up on step
function setupStepClicking() {
  document.querySelectorAll(".progress-step").forEach(stepEl => {
    stepEl.addEventListener("click", function () {
      let targetStep = parseInt(this.getAttribute("data-step"));

      // Prevent clicking ahead without completing required fields
      if (!validateStep(currentStep)) return;

      // SPECIAL RULE: Skip Step 3 when OTHER NICHE is selected
      if (selectedNicheType === "other") {
        // If user clicks step 3 → redirect to step 4
        if (targetStep === 3) targetStep = 4;

        // Prevent going to step 3 at all
        if (targetStep > 2 && targetStep < 4) targetStep = 4;
      }

      currentStep = targetStep;
      showStep(currentStep);
      updateProgressBar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================
   VALIDATION
========================= */
function validateStep(step) {
  const section = document.querySelector(`.step-content[data-step="${step}"]`);
  const required = section.querySelectorAll('[required]');
  let firstInvalid = null;

  required.forEach(f => f.classList.remove('error'));

  required.forEach(f => {
    f.addEventListener('input', () => {
      if (f.value.trim()) f.classList.remove('error');
    });

    if (f.offsetParent !== null && !f.value.trim()) {
      f.classList.add('error');
      if (!firstInvalid) firstInvalid = f;
    }
  });

  if (step === 2) {
    const nicheSelected = document.querySelector('.niche-option.selected');
    const nicheOptions = document.querySelectorAll('.niche-option');

    nicheOptions.forEach(opt => {
      opt.classList.remove('error');
      opt.addEventListener('click', () => {
        nicheOptions.forEach(o => o.classList.remove('error'));
      });
    });

    if (!nicheSelected) {
      nicheOptions.forEach(opt => opt.classList.add('error'));
      if (!firstInvalid) firstInvalid = nicheOptions[0];
    }
  }

  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus?.();
    return false;
  }

  return true;
}
</script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const myModal = document.getElementById("myModal");
  const closeButton = document.querySelector(".close-button");
  const overlay = document.getElementById("overlay");

  openPopupBtn.addEventListener("click", function() {
    myModal.classList.add("show");
    overlay.classList.add("show");
  });

  closeButton.addEventListener("click", function() {
    myModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function(event) {
    if (event.target === myModal) {
      myModal.classList.remove("show");
      overlay.classList.remove("show");
    }
  });
});
</script>
{% schema %}
{
  "name": "Dropshipping Funnel",
  "settings": [
    {
      "type": "header",
      "content": "Main Settings"
    },
    {
      "type": "text",
      "id": "main_title",
      "label": "Main Title",
      "default": "Build Your Dream Dropshipping Store"
    },
    {
      "type": "text",
      "id": "main_subtitle",
      "label": "Main Subtitle",
      "default": "Build Your Dream Dropshipping Store"
    },
    {
      "type": "header",
      "content": "Progress Steps Labels"
    },
    {
      "type": "text",
      "id": "step1_label",
      "label": "Step 1 Label",
      "default": "Store Setup"
    },
    {
      "type": "text",
      "id": "step2_label",
      "label": "Step 2 Label",
      "default": "Niche"
    },
    {
      "type": "text",
      "id": "step3_label",
      "label": "Step 3 Label",
      "default": "Package"
    },
    {
      "type": "text",
      "id": "step4_label",
      "label": "Step 4 Label",
      "default": "Add-ons"
    },
    {
      "type": "header",
      "content": "Step 1: Store Setup"
    },
    {
      "type": "text",
      "id": "step1_title",
      "label": "Step 1 Title",
      "default": "Step 1: Your Store Setup"
    },
    {
      "type": "text",
      "id": "step1_subtitle",
      "label": "Step 1 Subtitle",
      "default": "Are you starting a new Shopify store or using an existing one?"
    },
    {
      "type": "text",
      "id": "new_store_title",
      "label": "New Store Title",
      "default": "New Store"
    },
    {
      "type": "text",
      "id": "new_store_desc",
      "label": "New Store Description",
      "default": "Start fresh with a brand new Shopify store set up"
    },
    {
      "type": "text",
      "id": "existing_store_title",
      "label": "Existing Store Title",
      "default": "Existing Store"
    },
    {
      "type": "text",
      "id": "existing_store_desc",
      "label": "Existing Store Description",
      "default": "Connect your existing Shopify store with us"
    },
    {
      "type": "text",
      "id": "customer_name_label",
      "label": "Customer Name Label",
      "default": "Customer Name"
    },
    {
      "type": "text",
      "id": "email_label",
      "label": "Email Label",
      "default": "Email"
    },
    {
      "type": "text",
      "id": "phone_label",
      "label": "Phone Label",
      "default": "Phone"
    },
    {
      "type": "text",
      "id": "store_url_label",
      "label": "Store URL Label",
      "default": "Shopify Store URL"
    },
    {
      "type": "text",
      "id": "collaborator_code_label",
      "label": "Collaborator Code Label",
      "default": "4 digit collaborator's Code"
    },
    {
      "type": "header",
      "content": "Step 2: Niche Selection"
    },
    {
      "type": "text",
      "id": "step2_title",
      "label": "Step 2 Title",
      "default": "Step 2: Choose Your Niche"
    },
    {
      "type": "text",
      "id": "step2_subtitle",
      "label": "Step 2 Subtitle",
      "default": "Select the product category that best fits your store niche"
    },
    {
      "type": "textarea",
      "id": "niche",
      "label": "Add Niche",
      "info": "Add your niches in form of niche_1||niche_2 ..."
    },
    {
      "type": "text",
      "id": "other_niche_label",
      "label": "Other Niche Label",
      "default": "Other Niche"
    },
    {
      "type": "text",
      "id": "other_niche_placeholder",
      "label": "Other Niche Placeholder",
      "default": "Please specify your niche"
    },
    {
      "type": "product",
      "id": "other_niche_product",
      "label": "Other Niche Product"
    },
    {
      "type": "text",
      "id": "general_niche_label",
      "label": "General Niche Label",
      "default": "General Niche"
    },
    {
      "type": "product",
      "id": "general_niche_product",
      "label": "General Niche Product"
    },
    {
      "type": "header",
      "content": "Step 3: Package Selection"
    },
    {
      "type": "text",
      "id": "step3_title",
      "label": "Step 3 Title",
      "default": "Step 3: Select Your Package"
    },
    {
      "type": "text",
      "id": "step3_subtitle",
      "label": "Step 3 Subtitle",
      "default": "Choose the perfect package to get your store started"
    },
    {
      "type": "product",
      "id": "premium_product",
      "label": "Premium Package Product"
    },
    {
      "type": "text",
      "id": "premium_package_title",
      "label": "Premium Package Title",
      "default": "Premium Package"
    },
    {
      "type": "text",
      "id": "premium_package_desc",
      "label": "Premium Package Description",
      "default": "A ready-to-launch professional store, ideal for entrepreneurs getting started"
    },
    {
      "type": "product",
      "id": "custom_product",
      "label": "Custom Brand Package Product"
    },
    {
      "type": "text",
      "id": "custom_package_title",
      "label": "Custom Package Title",
      "default": "Custom Brand Package"
    },
    {
      "type": "text",
      "id": "custom_package_desc",
      "label": "Custom Package Description",
      "default": "A ready-to-launch professional store, ideal for entrepreneurs getting started"
    },
    {
      "type": "text",
      "id": "popular_badge_text",
      "label": "Popular Badge Text",
      "default": "POPULAR"
    },
    {
      "type": "header",
      "content": "Step 4: Add-ons"
    },
    {
      "type": "text",
      "id": "step4_title",
      "label": "Step 4 Title",
      "default": "Step 4: Add Your Upgrades"
    },
    {
      "type": "text",
      "id": "step4_subtitle",
      "label": "Step 4 Subtitle",
      "default": "Enhance your store with professional add-ons"
    },
    {
      "type": "text",
      "id": "logo_section_title",
      "label": "Logo Section Title",
      "default": "Logo Design"
    },
    {
      "type": "text",
      "id": "included_text",
      "label": "Included Badge Text",
      "default": "INCLUDED"
    },
    {
      "type": "text",
      "id": "standard_logo_title",
      "label": "Standard Logo Title",
      "default": "Standard Logo"
    },
    {
      "type": "text",
      "id": "standard_logo_desc",
      "label": "Standard Logo Description",
      "default": "Professional logo design with basic branding elements"
    },
    {
      "type": "product",
      "id": "branded_logo_product",
      "label": "Branded Logo Product"
    },
    {
      "type": "text",
      "id": "branded_logo_title",
      "label": "Branded Logo Title",
      "default": "Branded Logo"
    },
    {
      "type": "text",
      "id": "branded_logo_desc",
      "label": "Branded Logo Description",
      "default": "Premium logo with full brand identity and style guide"
    },
    {
      "type": "text",
      "id": "revision_section_title",
      "label": "Revision Section Title",
      "default": "Product Revisions"
    },
    {
      "type": "product",
      "id": "revision_product",
      "label": "Revision Product (with variants)"
    },
    {
      "type": "text",
      "id": "revision_desc",
      "label": "Revision Description"
    },
    {
      "type": "text",
      "id": "products_section_title",
      "label": "Products Section Title",
      "default": "Number of Products"
    },
    {
      "type": "text",
      "id": "products_included_text",
      "label": "Products Included Text"
    },
    {
      "type": "product",
      "id": "extra_products_product",
      "label": "Extra Products Product"
    },
    {
      "type": "text",
      "id": "extra_products_title",
      "label": "Extra Products Title",
      "default": "Extra Products"
    },
    {
      "type": "text",
      "id": "extra_products_desc",
      "label": "Extra Products Description",
      "default": "Add more curated products to your store"
    },
    {
      "type": "header",
      "content": "Right Sidebar"
    },
    {
      "type": "text",
      "id": "sales_related_text",
      "label": "Sale related text"
    },
    {
      "type": "text",
      "id": "sidebar_title",
      "label": "Side bar title",
      "default": "What you will get"
    },
    {
      "type": "select",
      "id": "source",
      "label": "Source icon",
      "default": "text",
      "options": [
        {
          "value": "text",
          "label": "Normal text"
        },
        {
          "value": "get_image",
          "label": "Use image"
        }
      ]
    },
    {
      "type": "image_picker",
      "id": "image_icon",
      "label": "Choose image",
      "info": "Only used for source image"
    },
    
    {
      "type": "text",
      "id": "sale_badge_text",
      "label": "Sale Badge Text"
    },

    {
      "type": "image_picker",
      "id": "partner_logo",
      "label": "Partner Logo"
    },
    {
      "type": "header",
      "content": "Button Text"
    },
    {
      "type": "text",
      "id": "next_button_text",
      "label": "Next Button Text",
      "default": "Next"
    },
    {
      "type": "text",
      "id": "back_button_text",
      "label": "Back Button Text",
      "default": "Back"
    },
    {
      "type": "text",
      "id": "add_to_cart_text",
      "label": "Add to Cart Button Text",
      "default": "Add to Cart"
    },
    {
      "type": "header",
      "content": "Fast Delivery Option"
    },
    {
      "type": "product",
      "id": "fast_delivery_product",
      "label": "Fast Delivery Product"
    },
    {
      "type": "text",
      "id": "fast_delivery_title",
      "label": "Fast Delivery Title",
      "default": "Fast Delivery"
    },
    {
      "type": "text",
      "id": "terms_and_conditions_applied",
      "label": "Terms and Conditions"
    }
  ],
  "presets": [
    {
      "name": "Dropshipping Funnel"
    }
  ]
}
{% endschema %}
{% comment %}
  Dropshipping Store Builder Funnel Section
  Multi-step product configuration with dynamic pricing
{% endcomment %}

{% liquid
  assign premium_product = all_products[section.settings.premium_product]
  assign custom_product = all_products[section.settings.custom_product]
  assign branded_logo_product = all_products[section.settings.branded_logo_product]
  assign revision_product = all_products[section.settings.revision_product]
  assign extra_products_product = all_products[section.settings.extra_products_product]
  assign fast_delivery_product = all_products[section.settings.fast_delivery_product]
  assign other_niche_product = all_products[section.settings.other_niche_product]
  assign general_niche_product = all_products[section.settings.general_niche_product]
%}

<style>

.mobile-only-form-container {
    display: none;
}

@media screen and (max-width: 1023px) {
    .mobile-only-form-container {
        display: flex;
        justify-content: space-between;
        border: 1px solid #B4B4B4;
        padding: 20px 20px;
        border-radius: 7px;
        margin-top: 20px;
    }
    button#openPopupBtn {
    background: none; 
    border: none;   
    padding: 0;      
    cursor: pointer; 
    color: #056A88; 
    font-size: 14px;  
    font-weight: 700;
    text-decoration: underline; 
}
span.selected_niche_price {
    font-size: 10px;
    color: #0D9488;
    font-weight: 500;
    display: flex;
    justify-content: center;
}
.niche-label{
text-align: center;
}
}
  #shopify-section-{{ section.id }} .funnel-container {
    display: flex;
    gap: 30px;
    padding-left:2%;
    padding-right:2%;
    align-items: flex-start;
  }
  #shopify-section-{{section.id }} .image_sale_badge{
    position: relative;
    max-width: 114px;
    width: 100%;
    right: 8%;
    top: -20px;
    display:none;
  }

  #shopify-section-{{ section.id }} #compareAtPrice {
    font-size: 20px;
    line-height: normal;
    color: red;
    font-weight: 500;
    text-decoration: line-through;
    display: flex !important;
    flex-direction: row !important;
  }

  #shopify-section-{{ section.id }} #totalPriceDisplay {
    font-size: 2.8rem;
    line-height: 140%;
    color: #086c88;
    font-weight: 700;
  }

  #shopify-section-{{ section.id }} .sidebar-pricing {
    display: flex;
    justify-content: space-between;
    align-items: center;
    
  }
  #shopify-section-{{section.id }} .widget_hr{
    max-width: 80%!important;
    width: 100%;
    margin:15px auto;
    background: #E5E7EB;
  }

  #shopify-section-{{ section.id }} .sidebar-pricing div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
  }
  #shopify-section-{{ section.id }} .pkg_description{
    padding: 14px 15px;
    border-radius: 15px;
    border: 1px solid #F3F4F6;
    box-shadow: 0px 0.83px 6.04px -3.62px #0000001A;
    margin-bottom: 15px;
  }


  #shopify-section-{{ section.id }} .dropship-funnel {
    padding-top: 30px;
    background-color:#fff;
    border-radius:10px;
    margin-top:-50px;
    padding-bottom: 50px;
    box-shadow: 4px 6px 25px -13px #086C;
    margin-bottom:50px;
  }

  #shopify-section-{{ section.id }} .selection-summary {
    {% comment %} min-height: 220px; {% endcomment %}
    margin-top: 7px;
    padding: 14px;
    border: 1px solid #40ADAA;
    border-radius: 10px;
    position: relative;
    background: #F8FFFF;
    margin-bottom: 12px;
    box-shadow: 0px 0.83px 6.04px -3.62px #EBFFFE;
  }
  #shopify-section-{{ section.id }}  #selectionList li:not(:last-child){
    {% comment %} border-bottom: 1px solid #ddd; {% endcomment %}
     
  }

  #shopify-section-{{ section.id }} .selection-summary .order_summary_title{
    font-size: 14px;
    font-weight: 600;
    line-height: 16.9px;
    position: absolute;
    {% comment %} background: #ddd; {% endcomment %}
    padding: 7px 5px;
    color: #000;
    border-radius: 6px;
    top: -15px;
    position: static;
    border-bottom:1px solid  #E5E7EB;
  }
  #shopify-section-{{ section.id }} .funnel-left {
    max-width: 66.4%;
    width: 100%;
    flex: 1;
    background: #fff;
    padding: 50px;
    border-radius: 6px;
    box-shadow: 0px 0px 6px 1px #0000001a;
  }

  #shopify-section-{{ section.id }} .funnel-right {
    max-width: 33.6%;
    width: 100%;
    background: white;
    padding: 20px;
    border-radius: 5px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: sticky;
    top: 20px;
  }

  #shopify-section-{{ section.id }} .funnel-header {
    margin-bottom: 10px;
  }

  {% comment %} #shopify-section-{{ section.id }} .funnel-header h1 {
    font-size: 2.8rem;
    line-height: normal;
    font-weight: 600;
    margin: 0px;
    letter-spacing: 0px;
  } {% endcomment %}

  #shopify-section-{{ section.id }} .funnel-header p {
    margin: 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  /* Progress Bar */
  #shopify-section-{{ section.id }} .progress-bar {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }

  #shopify-section-{{ section.id }} .progress-step {
    flex: 1;
    text-align: center;
    position: relative;
    cursor: pointer;
  }

  #shopify-section-{{ section.id }} .fast_delivery_enabled {
    height: 40px;
  }

  #shopify-section-{{ section.id }} .progress-circle {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #e5e7eb;
    color: #9CA3AF;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto 9px;
    font-weight: 400;
    font-size: 1.6rem;
    position: relative;
    z-index: 2;
  }

  #shopify-section-{{ section.id }} .progress-step.active .progress-circle,
  #shopify-section-{{ section.id }} .progress-step.completed .progress-circle {
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .progress-label {
    font-size: 1.4rem;
    line-height: 140%;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .progress-step.active .progress-label {
    color: #086c88;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .progress-line {
    position: absolute;
    bottom: 22px;
    left: 0;
    right: 0;
    height: 2.5px;
    background: #e5e7eb;
    z-index: 1;
  }

  #shopify-section-{{ section.id }} .progress-line-fill {
    height: 100%;
    background: #086c88;
    transition: width 0.3s ease;
  }

  /* Step Content */
  #shopify-section-{{ section.id }} .step-content {
    display: none;
  }

  #shopify-section-{{ section.id }} .step-content.active {
    display: block;
  }

  #shopify-section-{{ section.id }} .step-title {
    font-size: 2rem;
    line-height: 140%;
    font-weight: 600;
    margin: 0 0 8px 0;
  }

  #shopify-section-{{ section.id }} .collaborator_path {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 1.4rem;
    line-height: 140%;
    color: #222;
    margin-top: 5px;
  }

  #shopify-section-{{ section.id }} .step-subtitle {
    margin: 0 0 10px 0;
    font-size: 1.6rem;
    line-height: 140%;
  }

  /* Store Type Selection */
  #shopify-section-{{ section.id }} .store-type-options {
    display: flex;
    gap: 20px;
    margin-bottom: 15px;
  }

  #shopify-section-{{ section.id }} .store-type-card {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
  }

  #shopify-section-{{ section.id }} .store-type-card:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .store-type-card.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .store-type-icon {
    width: 40px;
    height: 40px;
    background: #086c88;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 5px;
  }

  #shopify-section-{{ section.id }} .store-type-title {
    font-weight: 600;
    margin: 0 0 5px 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .store-type-desc {
    font-size: 1.5rem;
    line-height: 140%;
    margin: 0;
  }

  #shopify-section-{{ section.id }} #selectionList {
    padding: 0px;
    margin-top: 10px;
    font-size: 1.4rem;
    line-height: 160%;
    list-style: none;
    margin-bottom: 0px;
    color: #4B5563;
  }

  #shopify-section-{{ section.id }} .store-type-radio {
    width: 0px;
    height: 0px;
    position: absolute;
    top: 15px;
    right: 15px;
  }

  /* Form Fields */
  #shopify-section-{{ section.id }} .form-row {
    display: flex;
    gap: 20px;
    margin-bottom: 10px;
  }

  #shopify-section-{{ section.id }} .form-group {
    flex: 1;
  }

  #shopify-section-{{ section.id }} .form-label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    font-size: 1.6rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .form-input {
    width: 100%;
    padding: 5px 15px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 1.6rem;
    line-height: 140%;
    transition: border-color 0.3s ease;
  }

  #shopify-section-{{ section.id }} select.form-input {
    padding: 0px 12px;
  }

  #shopify-section-{{ section.id }} .form-input:focus {
    outline: none;
    border-color: #086c88;
  }
  #shopify-section-{{ section.id }} .sale_text{
    font-size: 2.0rem;
    color: #247272;
    text-align: center;
    font-weight: 700;
    line-height: 100%;
    margin: 2rem 0rem;
  }
  #shopify-section-{{ section.id }} .main-compare-price{
    align-items: flex-start!important;
    gap: 3px!important;
    flex-direction: row !important;
   
  }
  #shopify-section-{{ section.id }} .main-compare-price span{
    font-size: 13px;
    font-weight: bold;
    line-height: normal;
    color: #9CA3AF;
  }
  /* Niche Selection */
  #shopify-section-{{ section.id }} .niche-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    margin-bottom: 20px;
  }

  #shopify-section-{{ section.id }} .niche-option {
    border: 1px solid #ddd;
    border-radius: 6px;
    padding: 25px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #shopify-section-{{ section.id }} .niche-option:hover {
    border-color: #086c88;
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .niche-option.selected {
    border-color: #086c88;
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .niche-option.selected .selected_niche_price{
    {% comment %} color: #ffe7cf; {% endcomment %}
    font-weight: 700;
  }
  #shopify-section-{{ section.id }} .niche-radio {
    margin-right: 10px;
  }

  #shopify-section-{{ section.id }} .niche-label {
    font-size: 1.6rem;
    line-height: 140%;
    font-weight: 400;
  }

  #shopify-section-{{ section.id }} .error {
    border: 2px solid red !important;
  }

  #shopify-section-{{ section.id }} .niche-option.error {
    outline: 2px solid red;
    border-radius: 6px;
  }

  #shopify-section-{{ section.id }} .niche-other {
    display: flex;
  }

  #shopify-section-{{ section.id }} .niche-other div {
    max-width: 50%;
    width: 100%;
  }

  #shopify-section-{{ section.id }} #other_niche_input {
    padding: 5px 15px;
  }

  #shopify-section-{{ section.id }} .niche-other-input {
    display: none;
  }

  #shopify-section-{{ section.id }} .niche-other.selected .niche-other-input {
    display: block;
  }

  /* Package Selection */
  #shopify-section-{{ section.id }} .package-option {
    position: relative;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 10px;
    margin-bottom: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 15px;
    justify-content: space-between;
  }

  #shopify-section-{{ section.id }} .package-option:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .package-option.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .package-left {
    display: flex;
    align-items: center;
    max-width: 70%;
    width: 100%;
    flex: 1;
  }
  #shopify-section-{{ section.id }} .package-price{
    max-width: 20%;
    width: 100%;

  }
  #shopify-section-{{ section.id }} .package-icon {
    width: 40px;
    height: 40px;
    background: #f0f8fc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
    font-size: 20px;
  }

  #shopify-section-{{ section.id }} .package-info h3 {
    margin: 0 0 5px 0;
    font-size: 1.8rem;
    line-height: 140%;
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .package-info p {
    margin: 0;
    font-size: 1.4rem;
    line-height: 140%;
    min-width: 190px;
  }

  #shopify-section-{{ section.id }} .package-price {
    font-size: 2.8rem;
    line-height: normal;
    font-weight: 700;
    color: #086c88;
    display: flex;
    flex-direction: column;
    {% comment %} align-items: center; {% endcomment %}
    justify-content: center;
  }
  #shopify-section-{{ section.id }} .package-price .compareAtPrice{
    font-size: 1.4rem;
    color: #9CA3AF;
    text-decoration: line-through;
  }
  #shopify-section-{{ section.id }} .package-price .wasttext{
    font-size: 1.4rem;
    color: #9CA3AF;
  }
  #shopify-section-{{ section.id }} .package-badge, #shopify-section-{{ section.id }} .addon-badge {
    background: red;
    color: #fff;
    padding: 5px 10px;
    border-radius: 6px;
    font-size: 1.4rem;
    line-height: normal;
    font-weight: 700;
    text-transform: uppercase;
    position: absolute;
    top: -12px;
    right: 10px;
  }
  #shopify-section-{{ section.id }} .addon-badge {
    background: #3c8ba1;
  }

  #shopify-section-{{ section.id }} .addon-badge.branded {
    background: red;
  }
  /* Add-ons */
  #shopify-section-{{ section.id }} .addon-group {
    margin-bottom: 15px;
  }

  #shopify-section-{{ section.id }} .addon-title {
    font-weight: 600;
    margin: 0 0 15px 0;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-options {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
  }

  #shopify-section-{{ section.id }} .addon-card {
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 200px;
    position: relative;
  }

  #shopify-section-{{ section.id }} .addon-card:hover {
    border-color: #086c88;
  }

  #shopify-section-{{ section.id }} .addon-card.selected {
    border-color: #086c88;
    background: #f0f8fc;
  }

  #shopify-section-{{ section.id }} .addon-card.included {
    background: #f0f8fc;
    border-color: #086c88;
    cursor: default;
  }

  #shopify-section-{{ section.id }} .addon-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  #shopify-section-{{ section.id }} .addon-name {
    font-weight: 600;
    font-size: 1.8rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-price-tag {
    font-weight: 700;
    color: #086c88;
    font-size: 1.6rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .addon-desc {
    font-size: 1.6rem;
    line-height: 140%;
    margin: 0;
  }

  {% comment %} #shopify-section-{{ section.id }} .addon-badge {
    display: inline-block;
    background: #4caf50;
    color: #fff;
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 10px;
    line-height: 140%;
    font-weight: 600;
    margin-bottom: 5px;
  } {% endcomment %}

  #shopify-section-{{ section.id }} .addon-quantity {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid #e5e7eb;
  }

  #shopify-section-{{ section.id }} .quantity-label {
    font-size: 12px;
    line-height: 140%;
    color: #666;
    margin-bottom: 5px;
  }

  #shopify-section-{{ section.id }} .quantity-input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 6px;
    font-size: 14px;
    line-height: 140%;
  }

  /* Buttons */
  #shopify-section-{{ section.id }} .button-group {
    display: flex;
    gap: 15px;
    margin-top: 30px;
    justify-content: space-between;
    align-items: center;
  }

  #shopify-section-{{ section.id }} .niche-other-input {
    grid-column: 1/-1;
  }

  #shopify-section-{{ section.id }} .btn {
    padding: 14px 30px;
    border-radius: 6px;
    font-size: 1.6rem;
    line-height: 140%;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    border: none;
  }

  #shopify-section-{{ section.id }} .step-content.active[data-step="1"] .btn-primary {
    flex: 1;
  }

  #shopify-section-{{ section.id }} .btn-primary {
    background: #086c88;
    color: #fff;
  }

  #shopify-section-{{ section.id }} .btn-primary:hover {
    background: #043340;
  }

  #shopify-section-{{ section.id }} .btn-secondary {
    background: #fff;
    color: #086c88;
    border: 2px solid #086c88;
    padding: 12px 30px;
  }

  #shopify-section-{{ section.id }} .btn-secondary:hover {
    color: #043340;
    border: 2px solid #043340;
    background: #fff;
  }

  /* Right Sidebar */
  #shopify-section-{{ section.id }} .sale-badge {
    background: orange;
    color: #fff;
    padding: 5px;
    border-radius: 6px;
    text-align: center;
    margin-bottom: 20px;
    font-weight: 600;
    font-size: 1.6rem;
    line-height: 140%;
    position: absolute;
    top: -15px;
    right: 10px;
    justify-content: center;
    min-width: 10%;
     
  }

  #shopify-section-{{ section.id }} .sidebar-title {
    font-size: 15px;
    line-height: 21.73px;
    font-weight: 700;
    margin: 0 0 0px 0;
    padding-bottom: 7px;
    border-bottom:1px solid  #E5E7EB;
  }
  #shopify-section-{{ section.id }} .benefits-list ul{
    padding-left: 0px;
    margin: 10px 0 0px 0;
  }
  #shopify-section-{{ section.id }} .benefits-list {
    list-style: none;
    padding: 0;
    margin: 0 0 0px 0;
  }

  #shopify-section-{{ section.id }} .benefits-list li {
    padding: 0;
    font-size: 12px;
    font-weight: 400;
    display: flex;
    align-items: center;
  }

  #shopify-section-{{ section.id }} .benefits-list li::before {
    content: "✓";
    color: #4caf50;
    font-weight: 700;
    margin-right: 10px;
    font-size: 1.4rem;
    line-height: 140%;
  }

  #shopify-section-{{ section.id }} .bonus-item {
    font-weight: 600;
  }

  #shopify-section-{{ section.id }} .bonus-item::before {
    content: "★";
    color: #ff9800;
  }

  #shopify-section-{{ section.id }} .price-breakdown {
    border-top: 2px solid #e5e7eb;
    padding-top: 20px;
    margin-top: 20px;
  }

  #shopify-section-{{ section.id }} .price-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
    font-size: 14px;
    line-height: 140%;
  }
  #shopify-section-{{ section.id }} #selectionList li{
      display: grid;
      grid-template-columns: 28% 68%;
      gap: 10px;
    }
    #shopify-section-{{ section.id }} #selectionList .fs-label-gray{
      color: #4B5563!important;
    }
  #shopify-section-{{ section.id }} #selectionList .fs-label{
      font-size: 12px;
      font-weight: 600;
      line-height: 14.49px;
      text-align: end;
      color: #086C88;
  }
  #shopify-section-{{ section.id }} .price-row.total {
    font-size: 20px;
    line-height: 140%;
    font-weight: 700;
    color: #086c88;
    margin-top: 15px;
    padding-top: 15px;
    border-top: 2px solid #e5e7eb;
  }

  #shopify-section-{{ section.id }} .shopify-partner {
    margin-top: 5px;
    text-align: center;
  }

  #shopify-section-{{ section.id }} .shopify-partner img {
    max-width: 180px;
    height: auto;
  }

  /* Media Queries */
  @media (max-width: 1023px) {
    #shopify-section-{{ section.id }} .dropship-funnel {
    padding-top: 30px;
    padding-bottom: 30px;
  }

    #shopify-section-{{ section.id }} .funnel-container {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .funnel-left {
      padding: 20px;
      max-width: 100%;
    }

    #shopify-section-{{ section.id }} .funnel-right {
      padding: 20px;
      max-width: 100%;
      width: 100%;
      position: static;
    }

    #shopify-section-{{ section.id }} .store-type-options {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .form-row {
      flex-direction: column;
    }

    #shopify-section-{{ section.id }} .niche-grid {
      {% comment %} grid-template-columns: 1fr; {% endcomment %}
    }
  }

  @media screen and (max-width: 625px) {
    #shopify-section-{{ section.id }} .package-left,
    #shopify-section-{{ section.id }} .package-option {
      flex-direction: row;
      {% comment %} align-items: flex-start; {% endcomment %}
      gap: 0px;
      max-width: 100%;
    }
    #shopify-section-{{ section.id }} .package-price{
      max-width: 100%;
    }
    #shopify-section-{{ section.id }} .package-option {
      padding: 15px;
    }

    #shopify-section-{{ section.id }} #totalPriceDisplay {
      font-size: 2.2rem;
    }
    #shopify-section-{{ section.id }} #compareAtPrice {
      font-size: 1.6rem;
    }
    #shopify-section-{{ section.id }} .store-type-title {
      font-size: 13px;
      margin: 0;
    }

    #shopify-section-{{ section.id }} #selectionList,
    #shopify-section-{{ section.id }} .benefits-list li {
      font-size: 1.4rem;
    }


    #shopify-section-{{ section.id }} .niche-label {
      font-size: 1.4rem;
    }

    #shopify-section-{{ section.id }} .package-price {
      margin-top: 20px;
      margin-left: 17px;
      font-size: 14px;
    }

    #shopify-section-{{ section.id }} .form-input,
    #shopify-section-{{ section.id }} .form-label {
      font-size: 1.4rem;
    }

    {% comment %} #shopify-section-{{ section.id }} .funnel-header h1 {
      font-size: 2.4rem;
      margin-bottom: 5px;
    } {% endcomment %}

    #shopify-section-{{ section.id }} .addon-title {
      font-size: 1.6rem;
    }

    #shopify-section-{{ section.id }} .btn {
 padding: 10px 30px;
        font-size: 1.4rem;
      ;
    }

    #shopify-section-{{ section.id }} .step-title,
    #shopify-section-{{ section.id }} .sidebar-title {
      font-size: 1.8rem;
    }

    #shopify-section-{{ section.id }} .funnel-header p {
      font-size: 1.6rem;
    }

    #shopify-section-{{ section.id }} .collaborator_path {
      flex-wrap: wrap;
      font-size: 1.2rem;
    }
  #shopify-section-{{ section.id }} .store-type-card {
    flex: 1;
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 20px;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center; 
  }
   #shopify-section-{{ section.id }} .store-type-icon {
    width: 40px;
    height: 40px;
    background: #086c88;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 2rem;
    margin-bottom: 5px;
    margin-right: 10px;
    margin-left: 25px;
  }

  #shopify-section-{{ section.id }} .package-info p {
    margin: 0;
    font-weight: 400px;
    font-size: 11px;
    line-height: 140%;
    min-width: 200px;
  }
    #shopify-section-{{ section.id }} .store-type-desc {
    font-size: 10px;
    font-weight: 400px;
    line-height: 140%;
    margin: 0;
  }

    #shopify-section-{{ section.id }} .package-info h3 {
    margin: 0 0 5px 0;
    font-size: 13px;
    line-height: 140%;
    font-weight: 600;
  }
  #shopify-section-{{ section.id }} .package-icon {
    width: 30px;
    height: 30px;
    background: #f0f8fc;
    border-radius: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 8px;
    font-size: 20px;
    margin-left: 20px;
    background-color: #F3F4F6;
    padding: 5px 5px;
  }
#shopify-section-{{ section.id }} .main_Price_pkg{
display: flex;
flex-direction: row;
}
 #shopify-section-{{ section.id }} .package-price .compareAtPrice{
    font-size: 12px;
    color: #9CA3AF;
    text-decoration: line-through;
  }
  #shopify-section-{{ section.id }} .package-price .wasttext{
    font-size: 12px;
    color: #9CA3AF;
  }
  #shopify-section-{{ section.id }} .addon-card {
    border: 2px solid #e5e7eb;
    border-radius: 6px;
    padding: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    flex: 1;
    min-width: 200px;
    position: relative;
    display: flex !important;
    flex-direction: row;
    align-items: center;
  }
    #shopify-section-{{ section.id }} .addon-price-tag {
    font-weight: 600;
    color: #374151;
    font-size: 13px;
    line-height: 140%;
    background-color: #F9FAFB;
    border: solid 0.2px #086C88;
    border-radius: 6px;
    padding: 5px 5px;
    margin-left: -7px;
  }

  #shopify-section-{{ section.id }} .addon-name {
    font-weight: 600;
    font-size: 13px;
    line-height: 140%;
  }
  /*Radio*/
.store-type-radio {
  position: absolute;
  opacity: 0; 
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  cursor: pointer;
}
.store-type-card {
  position: relative;
  padding-left: 50px; 
}
.custom-radio-label {
  position: absolute;
  left: 15px; 
  top: 50%;
  transform: translateY(-50%);
  z-index: 1; 
  height: 20px;
  width: 20px;
}
.custom-radio-indicator {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.custom-radio-indicator2 {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.custom-radio-indicator3 {
  display: block;
  height: 15px;
  width: 15px; 
  border-radius: 50%;
  border: 2px solid #D1D5DB;
  background-color: transparent;
  transition: all 0.2s ease;
}
.package-option.selected .custom-radio-indicator {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.package-option.selected .custom-radio-indicator2 {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.addon-card.selected .custom-radio-indicator3 {
   border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}
.store-type-radio:checked + .custom-radio-indicator {
  border-color: #086C88; 
  background-color: #fff; 
  position: relative; 
}

{% comment %} 
.store-type-radio:checked + .custom-radio-indicator::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 11px; 
  width: 10px;
  border-radius: 50%;
  background-color: white; 
} {% endcomment %}
  }

  {% comment %} Order Summary  {% endcomment %}
   /* Sticky Footer Order Summary */

   {% comment %} Order summary {% endcomment %}
    .modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
}

.modal-content {
    background-color: #fefefe;
    margin: 15% auto;
    padding: 10px 20px;
    border: 1px solid #888;
    width: 80%;
    position: relative;
    border-radius: 10px;
    border: 0.6px solid #40ADAA;
}

.close-button {
    display: flex;
    color: #aaa;
    justify-content: right;
    /* float: right; */
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.overlay {
  display: none; /* Hidden by default */
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 999; /* Below the modal but above other content */
}

.modal.show, .overlay.show {
  display: block; /* Show when 'show' class is added */
}
.step-indicator{
font-size: 12px;
font-weight: 500;
}

</style>

<div class="dropship-funnel t4s-container">
  <div class="funnel-container">
    <!-- Left Side: Main Form -->
    <div class="funnel-left">
      <div class="funnel-header">
        <h1>{{ section.settings.main_title }}</h1>
        <p>{{ section.settings.main_subtitle }}</p>
      </div>

      <!-- Progress Bar -->
      <div class="progress-bar">
        <div class="progress-line">
          <div class="progress-line-fill" id="progressFill"></div>
        </div>
        <div class="progress-step active" data-step="1">
          <div class="progress-circle">1</div>
          <div class="progress-label">{{ section.settings.step1_label }}</div>
        </div>
        <div class="progress-step" data-step="2">
          <div class="progress-circle">2</div>
          <div class="progress-label">{{ section.settings.step2_label }}</div>
        </div>
        <div class="progress-step" data-step="3">
          <div class="progress-circle">3</div>
          <div class="progress-label">{{ section.settings.step3_label }}</div>
        </div>
        <div class="progress-step" data-step="4">
          <div class="progress-circle">4</div>
          <div class="progress-label">{{ section.settings.step4_label }}</div>
        </div>
      </div>

      {%- form 'product',
        product,
        id: 'dropshipping-hubs-form',
        data-productid: product.id,
        class: 'dropship-hubs-forms',
        novalidate: 'novalidate'
      -%}
        <!-- Step 1: Store Setup -->
        <div class="step-content active" data-step="1">
          <h2 class="step-title">{{ section.settings.step1_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step1_subtitle }}</p>

          <div class="store-type-options">
            <div class="store-type-card selected" data-type="new">
              <label class="custom-radio-label">
      <input type="radio" name="store_type" value="New Store" class="store-type-radio" checked="" autocomplete="on">
      <span class="custom-radio-indicator"></span>
    </label>
              <div class="store-type-icon">
                <img src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Vector_2.svg?v=1763032162">
              </div>
              <div class="store_type_main">
              <h3 class="store-type-title">{{ section.settings.new_store_title }}</h3>
              <p class="store-type-desc">{{ section.settings.new_store_desc }}</p>
              </div>
            </div>
            <div class="store-type-card" data-type="existing">
             <label class="custom-radio-label">
      <input type="radio" name="store_type" value="New Store" class="store-type-radio" >
      <span class="custom-radio-indicator"></span>
    </label>
              <div class="store-type-icon">
                <img src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Frame.svg?v=1763034817">
              </div>
              <div class="store_type_main">
              <h3 class="store-type-title">{{ section.settings.existing_store_title }}</h3>
              <p class="store-type-desc">{{ section.settings.existing_store_desc }}</p>
              </div>
            </div>
          </div>

          <div id="newStoreFields">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.customer_name_label }} *</label>
                <input type="text" name="Customer name" class="form-input" required placeholder="Enter your name">
              </div>
              <div class="form-group">
                <label class="form-label">{{ section.settings.email_label }} *</label>
                <input type="email" name="Email" class="form-input" required placeholder="e.g., John@gmail.com">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.phone_label }} *</label>
                <input type="tel" name="Phone" class="form-input" required placeholder="+1 (567) 123-4567">
              </div>
            </div>
          </div>

          <div id="existingStoreFields" style="display: none;">
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.store_url_label }} *</label>
                <input
                  type="url"
                  name="Store url"
                  class="form-input"
                  placeholder="https://your-store.myshopify.com"
                  required
                >
              </div>
            </div>
            <div class="form-row">
              <div class="form-group">
                <label class="form-label">{{ section.settings.collaborator_code_label }}</label>
                <input type="text" name="Collaborator code" class="form-input" placeholder="Collobrator code">
                <div class="collaborator_path">
                  <div class="step">Shopify admin</div>
                  <div class="arrow">→</div>
                  <div class="step">Settings</div>
                  <div class="arrow">→</div>
                  <div class="step">Users > Security</div>
                  <div class="arrow">→</div>
                  <div class="step">Collaborators code</div>
                </div>
              </div>
            </div>
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 2: Choose Niche -->
        <div class="step-content" data-step="2">
          <h2 class="step-title">{{ section.settings.step2_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step2_subtitle }}</p>

          <div class="niche-grid">
            {% assign nicheOptions = section.settings.niche | split: '||' %}
            {% for option in nicheOptions %}
              {% if option != blank %}
                <div class="niche-option {% if forloop.first %}selected{% endif %}" data-niche="{{option}}">
                  {% comment %} <input
                    type="radio"
                    name="Store Niche"
                    value="{{option}}"
                    class="niche-radio"
                  > {% endcomment %}
             {% assign image_handle = option | handleize %}
             {% assign final_asset_name = image_handle | append: '.png' %}
          <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

                  <label class="niche-label">{{ option }}</label>
                </div>
              {% endif %}
            {% endfor %}
            <div
              class="niche-option niche-general"
              data-niche="general"
              data-product-id="{{ general_niche_product.id }}"
              data-product-variant-id="{{ general_niche_product.selected_or_first_available_variant.id }}"
              data-price="{{ general_niche_product.price }}"
              data-compare-price="{{general_niche_product.compare_at_price }}"
            >
     {% comment %} Code for General Niche Icon {% endcomment %}
            {% assign image_icon_name = 'general-niche' %}
            {% assign final_asset_name = image_icon_name | append: '.png' %}
          <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

              {% comment %} <input type="radio" name="Store Niche" value="general" class="niche-radio"> {% endcomment %}
              <label class="niche-label">
                {{- section.settings.general_niche_label }}
                <span class="selected_niche_price">(+ {{ general_niche_product.price | money }})</span></label
              >
            </div>
            {% comment %} <div
              class="niche-option niche-other"
              data-niche="other"
              data-product-id="{{ other_niche_product.id }}"
              data-product-variant-id="{{ other_niche_product.selected_or_first_available_variant.id }}"
              data-price="{{ other_niche_product.price }}"
              data-compare-price="{{other_niche_product.compare_at_price }}"
            >
        {% comment %} Code for Other Niche Icon {% endcomment %}
             {% assign image_icon_name = 'other-niche' %}
             {% assign final_asset_name = image_icon_name | append: '.png' %}
           <img src="{{ final_asset_name | asset_img_url: 'medium' }}" alt="{{ option }} icon" class="niche-icon" >

              {% comment %} <input type="radio" name="Store Niche" value="Other" class="niche-radio"> {% endcomment %}
              <label class="niche-label">
                {{- section.settings.other_niche_label }}
                <span class="selected_niche_price">(+ {{ other_niche_product.price | money }})</span></label
              >
            </div>
            <div class="niche-other-input">
              <input
                type="text"
                id="other_niche_input"
                name="Other niche"
                class="form-input"
                placeholder="{{ section.settings.other_niche_placeholder }}"
                required
              >
            </div> {% endcomment %}
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 3: Select Package -->
        <div class="step-content" data-step="3">
          <h2 class="step-title">{{ section.settings.step3_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step3_subtitle }}</p>

          <div
            class="package-option selected"
            data-package="premium"
            data-product-id="{{ premium_product.id }}"
            data-product-variant-id="{{ premium_product.selected_or_first_available_variant.id }}"
            data-price="{{ premium_product.price }}"
            data-compare-price="{{premium_product.compare_at_price }}"
          >
             <label class="custom-radio-label">
      <input type="radio" name="store_type2" value="New Store2" class="store-type-radio" checked="" autocomplete="on" >
      <span class="custom-radio-indicator2"></span>
    </label>
            <div class="package-left">
             <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/hdajfhkjda1.png?v=1763977307" alt="Package icon" />
              <div class="package-info">
                <h3>{{ section.settings.premium_package_title }}</h3>
                <p>{{ section.settings.premium_package_desc }}</p>
              </div>
            </div>
            <div class="package-price">
              <div class="main_Price_pkg">
                {% if premium_product.compare_at_price > premium_product.price -%}
                  <span class="wasttext"> WAS </span>
                {%- endif -%}
                <span class="compareAtPrice">${{ premium_product.compare_at_price | money_without_currency }} </span>
              </div>
              <span>${{ premium_product.price | money_without_currency }} </span>
            </div>
          </div>

          <div
            class="package-option"
            data-package="custom"
            data-product-id="{{ custom_product.id }}"
            data-product-variant-id="{{ custom_product.selected_or_first_available_variant.id }}"
            data-price="{{ custom_product.price }}"
            data-compare-price="{{custom_product.compare_at_price }}"
          >
             <label class="custom-radio-label">
      <input type="radio" name="store_type2" value="New Store2" class="store-type-radio">
      <span class="custom-radio-indicator2"></span>
    </label>
            <span class="package-badge">{{ section.settings.popular_badge_text }}</span>
            <div class="package-left">
              <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/pen.png?v=1763977347" alt="Package icon" />
              <div class="package-info">
                <h3>
                  {{ section.settings.custom_package_title }}
                </h3>
                <p>{{ section.settings.custom_package_desc }}</p>
              </div>
            </div>
            <div class="package-price">
              <div class="main_Price_pkg">
                {% if custom_product.compare_at_price > custom_product.price -%}
                  <span class="wasttext"> WAS </span>
                {%- endif -%}
                <span class="compareAtPrice">${{ custom_product.compare_at_price | money_without_currency }} </span>
              </div>
              <span>${{ custom_product.price | money_without_currency }} </span>
            </div>
          </div>

          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>

        <!-- Step 4: Add-ons -->
        <div class="step-content" data-step="4">
          <h2 class="step-title">{{ section.settings.step4_title }}</h2>
          <p class="step-subtitle">{{ section.settings.step4_subtitle }}</p>

          <!-- Logo Design -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.logo_section_title }}</h3>
            <div class="addon-options">
        
              <div class="addon-card" data-addon="standard-logo">
                <div class="addon-badge">{{ section.settings.included_text }}</div>
                               <label class="custom-radio-label">
      <input type="radio" name="store_type3" value="New Store3" class="store-type-radio" checked="" autocomplete="on" >
      <span class="custom-radio-indicator3"></span>
    </label>
     <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/Frame_2_2.png?v=1763984070" alt="Package icon" />
               <div class="package-info">
                <div class="addon-header">
                  <div class="addon-name">{{ section.settings.standard_logo_title }}</div>
                </div>
                <p class="addon-desc">{{ section.settings.standard_logo_desc }}</p>
              </div>
              </div>
              <div
                class="addon-card"
                data-addon="branded-logo"
                data-product-id="{{ branded_logo_product.id }}"
                data-product-variant-id="{{ branded_logo_product.selected_or_first_available_variant.id }}"
                data-price="{{ branded_logo_product.price }}"
                data-compare-price="{{branded_logo_product.compare_at_price }}"
              >
                    <label class="custom-radio-label">
      <input type="radio" name="store_type3" value="New Store3" class="store-type-radio" >
      <span class="custom-radio-indicator3"></span>
    </label>
    <img class="package-icon" src="https://cdn.shopify.com/s/files/1/0864/7199/9791/files/hdajfhkjda1.png?v=1763977307" alt="Package icon" />
             <div class="package-info">   
    <div class="addon-badge branded">{{ section.settings.popular_badge_text }}</div>
                
                <div class="addon-header">
                  <div class="addon-name">{{ section.settings.branded_logo_title }}</div>
                  
                </div>
                <p class="addon-desc">{{ section.settings.branded_logo_desc }}</p>
              </div>
              <div class="addon-price-tag">+${{ branded_logo_product.price | money_without_currency }}</div>
              </div>
            </div>
          </div>

          <!-- Product Revisions (dropdown) -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.revision_section_title }}</h3>
            {% if section.settings.revision_desc != blank %}
              <label class="form-label">{{ section.settings.revision_desc }}</label>
            {% endif %}
            <select id="revisionSelect" class="form-input">
              <option value="">1 Basic Revision (included)</option>
              {% for variant in revision_product.variants %}
                <option
                  data-value="{{variant.title }}"
                  value="{{ variant.id }}"
                  data-price="{{ variant.price }}"
                  data-compare-price="{{variant.compare_at_price }}"
                  data-product-variant-id="{{ variant.id }}"
                >
                  {{ variant.title }}
                  {% unless forloop.first %} (+ ${{ variant.price | money_without_currency }}){% endunless %}
                </option>
              {% endfor %}
            </select>
          </div>

          <!-- Extra Products (dropdown) -->
          <div class="addon-group">
            <h3 class="addon-title">{{ section.settings.products_section_title }}</h3>
            {% if section.settings.products_included_text != blank %}
              <label class="form-label">{{ section.settings.products_included_text }}</label>
            {% endif %}
            <select id="extraProductSelect" class="form-input">
              {% for variant in extra_products_product.variants %}
                <option
                  value="{{ variant.id }}"
                  data-price="{{ variant.price }}"
                  data-compare-price="{{variant.compare_at_price }}"
                  data-product-variant-id="{{ variant.id }}"
                >
                  {{ variant.title }}
                  {% unless forloop.first %} (+${{ variant.price | money_without_currency }}) {% endunless %}
                </option>
              {% endfor %}
            </select>
          </div>

          <!-- Fast Delivery -->
          <div class="addon-group fast_delivery_enabled">
            <label class="form-label" style="display:flex;align-items:center;gap:8px;">
              <input
                type="checkbox"
                id="fastDeliveryCheckbox"
                data-product-variant-id="{{ fast_delivery_product.selected_or_first_available_variant.id }}"
                data-product-id="{{ fast_delivery_product.id }}"
                data-price="{{ fast_delivery_product.price }}"
                data-compare-price="{{fast_delivery_product.compare_at_price }}"
              >
              {{ section.settings.fast_delivery_title }} +${{ fast_delivery_product.price | money_without_currency }}
            </label>
            {% if section.settings.terms_and_conditions_applied != blank %}
              <div class="terms_and_conditions" style="display: none">
                {{ section.settings.terms_and_conditions_applied }}
              </div>
            {% endif %}
          </div>
          <div class="button-group">
            <button type="button" class="btn btn-secondary" onclick="prevStep()">
              {{ section.settings.back_button_text }}
            </button>
            <button type="button" class="btn btn-primary" onclick="addToCart()">
              {{ section.settings.add_to_cart_text }}
            </button>
          </div>
        </div>
      {% endform %}
      
 <div class="mobile-only-form-container">
<div class="step-indicator" id="summaryStepIndicator">Step 1: Store Setup</div>
 <button id="openPopupBtn">Order Summary</button>

<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close-button">&times;</span>
        <div class="button-group">
            <button type="button" class="btn btn-primary" onclick="nextStep()">
              {{ section.settings.next_button_text }}
            </button>
          </div>
        </div>
</div>
</div>
</div>
<script>
    /* =========================
    SELECTION SUMMARY
========================= */
function renderSelectionSummary() {
    const closeButton = document.querySelector('.close-button');
    if (!closeButton) {
        console.error('Target element .close-button not found.');
        return;
    }
    let box = document.createElement('div');
    box.className = 'selection-summary';
    box.innerHTML = `<h3 class="order_summary_title">Order summary</h3>
                     <ul id="selectionList"></ul>`;
    closeButton.after(box);
    const list = box.querySelector('#selectionList');
}
if (window.innerWidth < 769) {
    console.log('test');
    document.addEventListener('DOMContentLoaded', renderSelectionSummary);
}
</script>


    <!-- Right Side: Summary -->
    <div class="funnel-right">
      <!-- Pricing Section -->

      <div class="sidebar-pricing">
        {% assign compare_price = premium_product.compare_at_price | divided_by: 100.0 %}
        {% assign total_price = premium_product.price | divided_by: 100.0 %}

        <div>
          <div class="main-compare-price">
            {% if compare_price > 0 %}
              <span>WAS</span>
            {% else %}

            {% endif %}
            {% if compare_price > 0 %}
              <div id="compareAtPrice">${{ compare_price }}</div>
            {% else %}
              <div id="compareAtPrice" style="display:none;"></div>
            {% endif %}
          </div>
          <div id="totalPriceDisplay">${{ total_price }}</div>
        </div>
        {% if section.settings.source == 'text' %}
          {% if section.settings.sale_badge_text != blank %}
            <div class="sale-badge">{{ section.settings.sale_badge_text }}</div>
          {% endif %}
        {% else %}
          {% if section.settings.image_icon != blank %}
            <div class="image_sale_badge"><img src="{{ section.settings.image_icon | img_url: 'master'}}"></div>
          {% endif %}
        {% endif %}
      </div>

      {% if section.settings.sales_related_text != blank %}
        <div class="sale_text">{{ section.settings.sales_related_text }}</div>
      {% endif %}
      {% if premium_product.description != blank %}
        <div class="pkg_description premium-description">
          <h3 class="sidebar-title">{{ section.settings.sidebar_title }}</h3>
          <div class="benefits-list">
            {{ premium_product.description }}
          </div>
        </div>
      {% endif %}

      {% if custom_product.description != blank %}
        <div class="pkg_description custom-description" style="display:none;">
          <h3 class="sidebar-title">{{ section.settings.sidebar_title }}</h3>
          <div class="benefits-list">
            {{ custom_product.description }}
          </div>
        </div>
      {% endif %}
      <hr class="widget_hr">
      <div class="shopify-partner">
        {% if section.settings.partner_logo %}
          <img src="{{ section.settings.partner_logo | img_url: '200x' }}" alt="Shopify Partners">
        {% else %}
          <img
            src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg"
            alt="Shopify Partners"
          >
        {% endif %}
      </div>
    </div>
  </div>
</div>
<script>
let currentStep = 1;
let selectedPackage = 'premium';
let basePrice = {{ premium_product.price | divided_by: 100.0 }};
let comparePrice = {{ premium_product.compare_at_price | divided_by: 100.0 }};
let selectedAddons = {};
let selectedNicheType = null;

// Cache original logo texts
let originalStandardLogoTitle = "";
let originalStandardLogoDesc = "";
let brandedLogoTitle = "{{ section.settings.branded_logo_title }}";
let brandedLogoDesc = "{{ section.settings.branded_logo_desc }}";

document.addEventListener('DOMContentLoaded', () => {
  const standardCard = document.querySelector('[data-addon="standard-logo"]');
  if (standardCard) {
    originalStandardLogoTitle =
      standardCard.querySelector('.addon-name')?.textContent.trim() || "";
    originalStandardLogoDesc =
      standardCard.querySelector('.addon-desc')?.textContent.trim() || "";
  }

  updateProgressBar();
  setupStoreTypeToggle();
  setupNicheSelection();
  setupPackageSelection();
  setupLogoSelection();   // IMPORTANT
  setupAddonSelection();
  updatePriceSummary();
  renderSelectionSummary();
  setupStepClicking();
  updatePackageDescription(); 
});

/* =========================
   STORE TYPE
========================= */
function setupStoreTypeToggle() {
  document.querySelectorAll('.store-type-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.store-type-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      card.querySelector('.store-type-radio').checked = true;

      const type = card.dataset.type;
      document.getElementById('newStoreFields').style.display = type === 'new' ? 'block' : 'none';
      document.getElementById('existingStoreFields').style.display = type === 'existing' ? 'block' : 'none';

      renderSelectionSummary();
    });
  });
}

/* =========================
   RADIO LOGO SELECTION
========================= */
function setupLogoSelection() {
  const standard = document.querySelector('[data-addon="standard-logo"]');
  const branded = document.querySelector('[data-addon="branded-logo"]');

  function selectLogo(type) {
    standard.classList.remove('selected');
    branded.classList.remove('selected');

    delete selectedAddons['logo']; // always store logo selection under one key

    if (type === 'standard') {
      standard.classList.add('selected');
      selectedAddons['logo'] = {
        type: 'standard',
        name: standard.querySelector('.addon-name').textContent.trim(),
        price: 0,
        isProduct: false
      };
    }

    if (type === 'branded') {
      branded.classList.add('selected');
      selectedAddons['logo'] = {
        type: 'branded',
        name: '{{ section.settings.branded_logo_title }}',
        price: parseFloat(branded.dataset.price) / 100,
        isProduct: true,
        variantId: parseInt(branded.dataset.productVariantId)
      };
    }

    updatePriceSummary();
    renderSelectionSummary();
  }

  window.selectLogo = selectLogo;

  // Default select standard
  selectLogo('standard');

  // Event Listeners
  standard.addEventListener('click', () => {
    if (selectedNicheType !== 'other') selectLogo('standard');
  });

  branded.addEventListener('click', () => {
    if (selectedNicheType !== 'other') selectLogo('branded');
  });
}

/* =========================
   NICHE SELECTION
========================= */
function setupNicheSelection() {
  document.querySelectorAll('.niche-option').forEach(option => {
    option.addEventListener('click', () => {
      document.querySelectorAll('.niche-option').forEach(o => o.classList.remove('selected'));
      option.classList.add('selected');
      option.querySelector('.niche-radio').checked = true;

      const nicheValue = option.getAttribute('data-niche');
      selectedNicheType = option.classList.contains('niche-other')
        ? 'other'
        : option.classList.contains('niche-general')
        ? 'general'
        : nicheValue;

      document.querySelectorAll('.niche-other-input').forEach(el => el.style.display = 'none');
      if (option.classList.contains('niche-other')) {
        document.querySelector('.niche-other-input').style.display = 'block';
      }

      const price = parseFloat(option.dataset.price || 0) / 100;
      const cmp = option.dataset.comparePrice ? parseFloat(option.dataset.comparePrice) / 100 : 0;

      if (selectedNicheType === 'other') {
        basePrice = price;
        comparePrice = cmp;
        selectedPackage = null;
        document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));
        applyOtherNicheLogoBehavior(true);
      }
      else {
        const premiumPkg = document.querySelector('.package-option[data-package="premium"]');
        if (premiumPkg) {
          document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));
          premiumPkg.classList.add('selected');
          selectedPackage = 'premium';
          basePrice = parseFloat(premiumPkg.dataset.price) / 100;
          comparePrice = premiumPkg.dataset.comparePrice ? parseFloat(premiumPkg.dataset.comparePrice) / 100 : 0;
        }
        applyOtherNicheLogoBehavior(false);
      }

      updateRevisionOptions(selectedNicheType);

      updatePriceSummary();
      renderSelectionSummary();
      updatePackageDescription();  
    });
  });
}

/* =========================
   OTHER NICHE LOGO TRANSFORM
========================= */
function applyOtherNicheLogoBehavior(isOtherNiche) {
  const standardLogo = document.querySelector('[data-addon="standard-logo"]');
  const brandedLogo = document.querySelector('[data-addon="branded-logo"]');

  const nameEl = standardLogo.querySelector('.addon-name');
  const descEl = standardLogo.querySelector('.addon-desc');

  if (isOtherNiche) {
    nameEl.textContent = brandedLogoTitle;
    descEl.textContent = brandedLogoDesc;
    brandedLogo.style.display = 'none';

    window.selectLogo('standard'); // forced only option

  } else {
    nameEl.textContent = originalStandardLogoTitle;
    descEl.textContent = originalStandardLogoDesc;
    brandedLogo.style.display = 'block';

    window.selectLogo('standard');
  }
}


/* =========================
   CUSTOM PACKAGE LOGO TRANSFORM
========================= */
function applyCustomPackageLogoBehavior(isCustom) {
  const standardLogo = document.querySelector('[data-addon="standard-logo"]');
  const brandedLogo = document.querySelector('[data-addon="branded-logo"]');

  const nameEl = standardLogo.querySelector('.addon-name');
  const descEl = standardLogo.querySelector('.addon-desc');

  if (isCustom) {
    // Change Standard → Branded
    nameEl.textContent = brandedLogoTitle;
    descEl.textContent = brandedLogoDesc;

    // Hide branded card because standard IS branded now
    brandedLogo.style.display = 'none';

    // Force select standard (now branded)
    window.selectLogo('standard');

  } else {
    // Restore standard logo name + desc
    nameEl.textContent = originalStandardLogoTitle;
    descEl.textContent = originalStandardLogoDesc;

    // Restore branded logo option
    brandedLogo.style.display = 'block';

    // Reset to default standard logo
    window.selectLogo('standard');
  }
}


/* =========================
   PACKAGE SELECTION
========================= */
function setupPackageSelection() {
  document.querySelectorAll('.package-option').forEach(pkg => {
    pkg.addEventListener('click', () => {
      if (selectedNicheType === 'other') return;

      document.querySelectorAll('.package-option').forEach(p => p.classList.remove('selected'));

      pkg.classList.add('selected');
      selectedPackage = pkg.dataset.package;
      if (selectedPackage === "custom") {
          applyCustomPackageLogoBehavior(true);
          updateRevisionOptions("custom"); 
      } else {
          applyCustomPackageLogoBehavior(false);
          updateRevisionOptions(selectedNicheType);
      }
      basePrice = parseFloat(pkg.dataset.price) / 100;
      comparePrice = pkg.dataset.comparePrice ? parseFloat(pkg.dataset.comparePrice) / 100 : 0;

      updatePriceSummary();
      renderSelectionSummary();
      updatePackageDescription();  
    });
  });
}
/* =========================
Pkg Descriptions
========================= */
function updatePackageDescription() {
  const premiumDesc = document.querySelector(".premium-description");
  const customDesc = document.querySelector(".custom-description");

  if (!premiumDesc || !customDesc) return;

  // CASE 1: OTHER NICHE SELECTED → always show custom pkg description
  if (selectedNicheType === "other") {
    premiumDesc.style.display = "none";
    customDesc.style.display = "block";
    return;
  }

  // CASE 2: NORMAL NICHE → follow selected package
  const selectedPkg = document.querySelector(".package-option.selected");

  if (selectedPkg?.dataset.package === "custom") {
    premiumDesc.style.display = "none";
    customDesc.style.display = "block";
  } else {
    premiumDesc.style.display = "block";
    customDesc.style.display = "none";
  }
}


/* =========================
   ADD-ONS
========================= */
function setupAddonSelection() {

  /* ----------------------------
     GENERAL NICHE PRICE HANDLING
  -----------------------------*/
  const generalNicheOption = document.querySelector('.niche-option.niche-general');

  document.querySelectorAll('.niche-option').forEach(option => {
    option.addEventListener('click', () => {

      // If GENERAL is selected → add price
      if (option.classList.contains('niche-general')) {
        const price = parseFloat(option.dataset.price) / 100;
        const cmp   = option.dataset.comparePrice ? parseFloat(option.dataset.comparePrice) / 100 : 0;

        selectedAddons['general-niche'] = {
          name: "General Niche",
          price: price,
          compare: cmp
        };

      } else {
        // If ANYTHING ELSE is selected → remove general niche addon
        delete selectedAddons['general-niche'];
      }

      updatePriceSummary();
      renderSelectionSummary();
    });
  });

  /* --------------------------------
     EXISTING ADDON LOGIC (unchanged)
  --------------------------------*/
  const revSel = document.getElementById('revisionSelect');
  revSel?.addEventListener('change', () => {
    const opt = revSel.selectedOptions[0];

    if (opt?.value) {
      selectedAddons['revision'] = {
        name:  opt.textContent.split('(')[0].trim(),
        price: parseFloat(opt.dataset.price) / 100,
        variantId: parseInt(opt.value)
      };
    } else delete selectedAddons['revision'];

    updatePriceSummary();
    renderSelectionSummary();
  });

  const extraSel = document.getElementById('extraProductSelect');
  extraSel?.addEventListener('change', () => {
    const opt = extraSel.selectedOptions[0];
    if (opt?.value) {
      selectedAddons['products'] = {
        name: opt.textContent.split('(')[0].trim(),
        price: parseFloat(opt.dataset.price) / 100,
        variantId: parseInt(opt.value)
      };
    } else delete selectedAddons['products'];

    updatePriceSummary();
    renderSelectionSummary();
  });

  const fast = document.getElementById('fastDeliveryCheckbox');
  fast?.addEventListener('change', () => {
    if (fast.checked) {
      selectedAddons['skip-line'] = {
        name: '{{ section.settings.fast_delivery_title }}',
        price: parseFloat(fast.dataset.price) / 100,
        variantId: parseInt(fast.dataset.productVariantId)
      };
      document.querySelector('.terms_and_conditions').style.display = "block";
    } else {
      delete selectedAddons['skip-line'];
      document.querySelector('.terms_and_conditions').style.display = "none";
    }

    updatePriceSummary();
    renderSelectionSummary();
  });
}

/* =========================
   REVISION OPTIONS
========================= */
function updateRevisionOptions(selectedNicheType) {
  const revSel = document.getElementById('revisionSelect');
  if (!revSel) return;

  const noRevisionOption = revSel.querySelector('option[value=""]');
  const OneRevisionOption = revSel.querySelector('option[data-value="1 Revision"]');
  const includedRevisionOption = [...revSel.options].find(
    o => o.textContent.trim().startsWith("1 Revision (Included)")
  );

  // Always reset visibility first
  if (noRevisionOption) noRevisionOption.style.display = "block";
  if (OneRevisionOption) OneRevisionOption.style.display = "block";
  if (includedRevisionOption) includedRevisionOption.style.display = "block";

  /* ============================================================
     CASE 1: OTHER NICHE OR CUSTOM PACKAGE
     → Same rule: auto-apply 1 Revision (Included)
  ============================================================ */
  if (selectedNicheType === "other" || selectedNicheType === "custom") {

    if (noRevisionOption) noRevisionOption.style.display = "none";
    if (OneRevisionOption) OneRevisionOption.style.display = "none";

    // Select the included revision by default
    const firstVariant = revSel.querySelector('option:not([value=""])');
    if (firstVariant) {
      revSel.value = firstVariant.value;
      revSel.dispatchEvent(new Event("change"));
    }
    return; // Stop here
  }

  /* ============================================================
     CASE 2: ALL NORMAL NICHES
     → Hide "1 Revision Included"
     → Reset selector
  ============================================================ */
  if (includedRevisionOption) includedRevisionOption.style.display = "none";

  revSel.value = "";
  revSel.dispatchEvent(new Event("change"));
}


/* =========================
   PRICE SUMMARY
========================= */
function updatePriceSummary() {
  const totalEl = document.getElementById('totalPriceDisplay');
  const compareEl = document.getElementById('compareAtPrice');

  let total = basePrice;
  let cmp = comparePrice;

  if (selectedAddons['logo']) {
    total += selectedAddons['logo'].price;
    cmp += selectedAddons['logo'].price;
  }

  for (const key in selectedAddons) {
    if (key !== 'logo') {
      total += selectedAddons[key].price || 0;
      cmp += selectedAddons[key].price || 0;
    }
  }

  totalEl.textContent = `Now $${total.toFixed(2)}`;

  if (cmp > total) {
    compareEl.style.display = 'block';
    compareEl.textContent = `$${cmp.toFixed(2)}`;
  } else {
    compareEl.style.display = 'none';
  }
}

/* =========================
   CART ADD
========================= */



async function addToCart() {
  let items = [];

  const getId = el => (el?.dataset?.productVariantId ? parseInt(el.dataset.productVariantId) : null);

  const name = document.querySelector('input[name="Customer name"]')?.value || '';
  const email = document.querySelector('input[name="Email"]')?.value || '';
  const phone = document.querySelector('input[name="Phone"]')?.value || '';
  const storeUrl = document.querySelector('input[name="Store url"]')?.value || '';
  const collaboratorCode = document.querySelector('input[name="Collaborator code"]')?.value || '';
  const selectedNicheLabel = document.querySelector('.niche-option.selected .niche-label')?.textContent || '';

  let properties = {
    "Customer Name": name,
    "Email": email,
    "Phone": phone,
    "Store URL": storeUrl,
    "Collaborator Code": collaboratorCode,
    "Selected Niche": selectedNicheLabel
  };

  if (selectedAddons['logo']) {
    properties["Logo Option"] = selectedAddons['logo'].name;
  }

  // main product selection
  const other = document.querySelector('.niche-option.niche-other.selected');
  const general = document.querySelector('.niche-option.niche-general.selected');
  const pkg = document.querySelector('.package-option.selected');


  if (selectedNicheType === 'other' && other) {
    const id = getId(other);
    if (id) items.push({ id, quantity: 1, properties });
  } 
  else if (pkg) {
    const id = getId(pkg);
    if (id) items.push({ id, quantity: 1, properties });
  }

  if (selectedNicheType === 'general' && general) {
    const id = getId(general);
    if (id) items.push({ id, quantity: 1 });
  }
  // Branded logo product if selected
  if (selectedAddons['logo']?.isProduct) {
    items.push({ id: selectedAddons['logo'].variantId, quantity: 1 });
  }

  // revision
  if (selectedAddons['revision']) {
    items.push({ id: selectedAddons['revision'].variantId, quantity: 1 });
  }

  // extra product
  if (selectedAddons['products']) {
    items.push({ id: selectedAddons['products'].variantId, quantity: 1 });
  }

  // fast delivery
  if (selectedAddons['skip-line']) {
    items.push({ id: selectedAddons['skip-line'].variantId, quantity: 1 });
  }

  items = items.reverse();

  try {
    await fetch('/cart/clear.js', { method: 'POST' });
    await fetch('/cart/add.js', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ items })
    });

    const params = new URLSearchParams();
    if (email) params.append('checkout[email]', email);
    if (name) params.append('checkout[shipping_address][first_name]', name);
    if (phone) params.append('checkout[shipping_address][phone]', phone);

    window.location.href = `/checkout?${params.toString()}`;

  } catch (err) {
    alert('Error adding to cart.');
  }
}


/* =========================
   SELECTION SUMMARY
========================= */
function renderSelectionSummary() {
  let box = document.querySelector('.selection-summary');
  if (!box) {
    box = document.createElement('div');
    box.className = 'selection-summary';
    box.innerHTML = `<ul id="selectionList"></ul>`;
    const saleBadge = document.querySelector('.sale_text');
    saleBadge.insertAdjacentElement('afterend', box);
  }

  const list = box.querySelector('#selectionList');
  list.innerHTML = "";


  /* =============================
     PACKAGE — STANDARD
  ============================= */
  const selectedPackageEl = document.querySelector(".package-option.selected");

  // SHOW normal package ONLY if NOT other niche
  if (selectedPackageEl && selectedNicheType !== "other") {
    const pkgName = selectedPackageEl.querySelector("h3")?.textContent.trim() || "";
    const pkgPrice = selectedPackageEl.dataset.price
      ? (parseFloat(selectedPackageEl.dataset.price) / 100).toFixed(2)
      : "0.00";

    list.innerHTML += `
      <li>
        <b>Package:</b>
        <span class="fs-label">${pkgName} (+ $${pkgPrice})</span>
      </li>`;
  }

  /* =============================
     PACKAGE — SPECIAL CASE (OTHER NICHE)
     Show CUSTOM BRAND PACKAGE
  ============================= */
  if (selectedNicheType === "other") {
    const customPkg = document.querySelector('.package-option[data-package="custom"]');
    if (customPkg) {
      const pkgName = customPkg.querySelector("h3")?.textContent.trim() || "Custom Brand Package";
      const pkgPrice = customPkg.dataset.price
        ? (parseFloat(customPkg.dataset.price) / 100).toFixed(2)
        : "0.00";

      list.innerHTML += `
        <li>
          <b>Package:</b>
          <span class="fs-label">${pkgName} (+ $${pkgPrice})</span>
        </li>`;
    }
  }

  

  /* =============================
     NICHE
  ============================= */
  const nicheLabel = document.querySelector('.niche-option.selected .niche-label')?.textContent || "";
  const nicheSplit = nicheLabel.split("(")[0].trim();

  const nicheAddon = selectedAddons["general-niche"];
  const nichePriceText = nicheAddon
    ? (nicheAddon.price > 0 ? `+$${nicheAddon.price.toFixed(2)}` : "Included")
    : "Included";

  if (nicheLabel) {
    list.innerHTML += `
      <li>
        <b>Niche:</b>
        <span class="fs-label">${nicheSplit} (${nichePriceText})</span>
      </li>`;
  }

  
  addDefaultOrSelected("products", "20 Products", "(Included)");
  /* =============================
     LOGO
  ============================= */
  const logoObj = selectedAddons["logo"];
  if (logoObj) {
    const logoPriceText =
      logoObj.price > 0 ? `+$${logoObj.price.toFixed(2)}` : "Included";

    list.innerHTML += `
      <li>
        <b>Logo:</b>
        <span class="fs-label fs-label-gray">${logoObj.name} (${logoPriceText})</span>
      </li>`;
  }

  /* ===================================================
     DEFAULT ITEM HANDLER
  =================================================== */

  function addDefaultOrSelected(key, defaultName, defaultPriceText) {
    if (selectedAddons[key]) {
      const addon = selectedAddons[key];
      const addonPrice =
        addon.price > 0 ? `(+$ ${addon.price.toFixed(2)})` : "(Included)";

      list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label">${addon.name} ${addonPrice} </span>
        </li>`;
    } else {
      if( key === 'products'){
        list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label">${defaultName} ${defaultPriceText}</span>
        </li>`;
      
      }else{
        list.innerHTML += `
        <li>
          <b style="text-transform: capitalize">${key}:</b>
          <span class="fs-label  fs-label-gray">${defaultName} ${defaultPriceText}</span>
        </li>`;
      }
      
    }
  }

  /* =============================
     DEFAULTS
  ============================= */
  addDefaultOrSelected("revision", "1 Basic Revision (Included)", " ");
  addDefaultOrSelected("skip-line", "No", " ");

  /* =============================
     PAID ADDONS (NO DUPLICATION)
  ============================= */
  for (const key in selectedAddons) {
    if (["logo", "general-niche", "revision", "skip-line", "products"].includes(key)) continue;

    const addon = selectedAddons[key];
    const addonPriceText =
      addon.price > 0 ? `+$${addon.price.toFixed(2)}` : "Included";

    list.innerHTML += `
      <li>
        <b style="text-transform:capitalize">${key}:</b>
        <span class="fs-label">${addon.name} (+ ${addonPriceText}) </span>
      </li>`;
  }
}



/* =========================
   STEPS
========================= */

function nextStep() {
  if (!validateStep(currentStep)) return;

  if (currentStep === 2 && selectedNicheType === 'other') {
    currentStep = 4;
  } else if (currentStep < 4) {
    currentStep++;
  }

  showStep(currentStep);
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function prevStep() {
  if (currentStep === 4 && selectedNicheType === 'other') {
    currentStep = 2;
  } else if (currentStep > 1) {
    currentStep--;
  }

  showStep(currentStep);
  updateProgressBar();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function showStep(step) {
  document.querySelectorAll('.step-content').forEach(el => el.classList.remove('active'));
  document.querySelector(`.step-content[data-step="${step}"]`).classList.add('active');
}

function updateProgressBar() {
  const steps = document.querySelectorAll('.progress-step');
  const fill = document.getElementById('progressFill');
  steps.forEach((s, i) => {
    const n = i + 1;
    s.classList.toggle('completed', n < currentStep);
    s.classList.toggle('active', n === currentStep);
  });
  fill.style.width = (currentStep / steps.length) * 100 + '%';
}

// Clicking up on step
function setupStepClicking() {
  document.querySelectorAll(".progress-step").forEach(stepEl => {
    stepEl.addEventListener("click", function () {
      let targetStep = parseInt(this.getAttribute("data-step"));

      // Prevent clicking ahead without completing required fields
      if (!validateStep(currentStep)) return;

      // SPECIAL RULE: Skip Step 3 when OTHER NICHE is selected
      if (selectedNicheType === "other") {
        // If user clicks step 3 → redirect to step 4
        if (targetStep === 3) targetStep = 4;

        // Prevent going to step 3 at all
        if (targetStep > 2 && targetStep < 4) targetStep = 4;
      }

      currentStep = targetStep;
      showStep(currentStep);
      updateProgressBar();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================
   VALIDATION
========================= */
function validateStep(step) {
  const section = document.querySelector(`.step-content[data-step="${step}"]`);
  const required = section.querySelectorAll('[required]');
  let firstInvalid = null;

  required.forEach(f => f.classList.remove('error'));

  required.forEach(f => {
    f.addEventListener('input', () => {
      if (f.value.trim()) f.classList.remove('error');
    });

    if (f.offsetParent !== null && !f.value.trim()) {
      f.classList.add('error');
      if (!firstInvalid) firstInvalid = f;
    }
  });

  if (step === 2) {
    const nicheSelected = document.querySelector('.niche-option.selected');
    const nicheOptions = document.querySelectorAll('.niche-option');

    nicheOptions.forEach(opt => {
      opt.classList.remove('error');
      opt.addEventListener('click', () => {
        nicheOptions.forEach(o => o.classList.remove('error'));
      });
    });

    if (!nicheSelected) {
      nicheOptions.forEach(opt => opt.classList.add('error'));
      if (!firstInvalid) firstInvalid = nicheOptions[0];
    }
  }

  if (firstInvalid) {
    firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
    firstInvalid.focus?.();
    return false;
  }

  return true;
}
</script>
<script>
document.addEventListener("DOMContentLoaded", function() {
  const openPopupBtn = document.getElementById("openPopupBtn");
  const myModal = document.getElementById("myModal");
  const closeButton = document.querySelector(".close-button");
  const overlay = document.getElementById("overlay");

  openPopupBtn.addEventListener("click", function() {
    myModal.classList.add("show");
    overlay.classList.add("show");
  });

  closeButton.addEventListener("click", function() {
    myModal.classList.remove("show");
    overlay.classList.remove("show");
  });

  // Close the modal if the user clicks outside the modal content
  window.addEventListener("click", function(event) {
    if (event.target === myModal) {
      myModal.classList.remove("show");
      overlay.classList.remove("show");
    }
  });
});
</script>
{% schema %}
{
  "name": "Dropshipping Funnel",
  "settings": [
    {
      "type": "header",
      "content": "Main Settings"
    },
    {
      "type": "text",
      "id": "main_title",
      "label": "Main Title",
      "default": "Build Your Dream Dropshipping Store"
    },
    {
      "type": "text",
      "id": "main_subtitle",
      "label": "Main Subtitle",
      "default": "Build Your Dream Dropshipping Store"
    },
    {
      "type": "header",
      "content": "Progress Steps Labels"
    },
    {
      "type": "text",
      "id": "step1_label",
      "label": "Step 1 Label",
      "default": "Store Setup"
    },
    {
      "type": "text",
      "id": "step2_label",
      "label": "Step 2 Label",
      "default": "Niche"
    },
    {
      "type": "text",
      "id": "step3_label",
      "label": "Step 3 Label",
      "default": "Package"
    },
    {
      "type": "text",
      "id": "step4_label",
      "label": "Step 4 Label",
      "default": "Add-ons"
    },
    {
      "type": "header",
      "content": "Step 1: Store Setup"
    },
    {
      "type": "text",
      "id": "step1_title",
      "label": "Step 1 Title",
      "default": "Step 1: Your Store Setup"
    },
    {
      "type": "text",
      "id": "step1_subtitle",
      "label": "Step 1 Subtitle",
      "default": "Are you starting a new Shopify store or using an existing one?"
    },
    {
      "type": "text",
      "id": "new_store_title",
      "label": "New Store Title",
      "default": "New Store"
    },
    {
      "type": "text",
      "id": "new_store_desc",
      "label": "New Store Description",
      "default": "Start fresh with a brand new Shopify store set up"
    },
    {
      "type": "text",
      "id": "existing_store_title",
      "label": "Existing Store Title",
      "default": "Existing Store"
    },
    {
      "type": "text",
      "id": "existing_store_desc",
      "label": "Existing Store Description",
      "default": "Connect your existing Shopify store with us"
    },
    {
      "type": "text",
      "id": "customer_name_label",
      "label": "Customer Name Label",
      "default": "Customer Name"
    },
    {
      "type": "text",
      "id": "email_label",
      "label": "Email Label",
      "default": "Email"
    },
    {
      "type": "text",
      "id": "phone_label",
      "label": "Phone Label",
      "default": "Phone"
    },
    {
      "type": "text",
      "id": "store_url_label",
      "label": "Store URL Label",
      "default": "Shopify Store URL"
    },
    {
      "type": "text",
      "id": "collaborator_code_label",
      "label": "Collaborator Code Label",
      "default": "4 digit collaborator's Code"
    },
    {
      "type": "header",
      "content": "Step 2: Niche Selection"
    },
    {
      "type": "text",
      "id": "step2_title",
      "label": "Step 2 Title",
      "default": "Step 2: Choose Your Niche"
    },
    {
      "type": "text",
      "id": "step2_subtitle",
      "label": "Step 2 Subtitle",
      "default": "Select the product category that best fits your store niche"
    },
    {
      "type": "textarea",
      "id": "niche",
      "label": "Add Niche",
      "info": "Add your niches in form of niche_1||niche_2 ..."
    },
    {
      "type": "text",
      "id": "other_niche_label",
      "label": "Other Niche Label",
      "default": "Other Niche"
    },
    {
      "type": "text",
      "id": "other_niche_placeholder",
      "label": "Other Niche Placeholder",
      "default": "Please specify your niche"
    },
    {
      "type": "product",
      "id": "other_niche_product",
      "label": "Other Niche Product"
    },
    {
      "type": "text",
      "id": "general_niche_label",
      "label": "General Niche Label",
      "default": "General Niche"
    },
    {
      "type": "product",
      "id": "general_niche_product",
      "label": "General Niche Product"
    },
    {
      "type": "header",
      "content": "Step 3: Package Selection"
    },
    {
      "type": "text",
      "id": "step3_title",
      "label": "Step 3 Title",
      "default": "Step 3: Select Your Package"
    },
    {
      "type": "text",
      "id": "step3_subtitle",
      "label": "Step 3 Subtitle",
      "default": "Choose the perfect package to get your store started"
    },
    {
      "type": "product",
      "id": "premium_product",
      "label": "Premium Package Product"
    },
    {
      "type": "text",
      "id": "premium_package_title",
      "label": "Premium Package Title",
      "default": "Premium Package"
    },
    {
      "type": "text",
      "id": "premium_package_desc",
      "label": "Premium Package Description",
      "default": "A ready-to-launch professional store, ideal for entrepreneurs getting started"
    },
    {
      "type": "product",
      "id": "custom_product",
      "label": "Custom Brand Package Product"
    },
    {
      "type": "text",
      "id": "custom_package_title",
      "label": "Custom Package Title",
      "default": "Custom Brand Package"
    },
    {
      "type": "text",
      "id": "custom_package_desc",
      "label": "Custom Package Description",
      "default": "A ready-to-launch professional store, ideal for entrepreneurs getting started"
    },
    {
      "type": "text",
      "id": "popular_badge_text",
      "label": "Popular Badge Text",
      "default": "POPULAR"
    },
    {
      "type": "header",
      "content": "Step 4: Add-ons"
    },
    {
      "type": "text",
      "id": "step4_title",
      "label": "Step 4 Title",
      "default": "Step 4: Add Your Upgrades"
    },
    {
      "type": "text",
      "id": "step4_subtitle",
      "label": "Step 4 Subtitle",
      "default": "Enhance your store with professional add-ons"
    },
    {
      "type": "text",
      "id": "logo_section_title",
      "label": "Logo Section Title",
      "default": "Logo Design"
    },
    {
      "type": "text",
      "id": "included_text",
      "label": "Included Badge Text",
      "default": "INCLUDED"
    },
    {
      "type": "text",
      "id": "standard_logo_title",
      "label": "Standard Logo Title",
      "default": "Standard Logo"
    },
    {
      "type": "text",
      "id": "standard_logo_desc",
      "label": "Standard Logo Description",
      "default": "Professional logo design with basic branding elements"
    },
    {
      "type": "product",
      "id": "branded_logo_product",
      "label": "Branded Logo Product"
    },
    {
      "type": "text",
      "id": "branded_logo_title",
      "label": "Branded Logo Title",
      "default": "Branded Logo"
    },
    {
      "type": "text",
      "id": "branded_logo_desc",
      "label": "Branded Logo Description",
      "default": "Premium logo with full brand identity and style guide"
    },
    {
      "type": "text",
      "id": "revision_section_title",
      "label": "Revision Section Title",
      "default": "Product Revisions"
    },
    {
      "type": "product",
      "id": "revision_product",
      "label": "Revision Product (with variants)"
    },
    {
      "type": "text",
      "id": "revision_desc",
      "label": "Revision Description"
    },
    {
      "type": "text",
      "id": "products_section_title",
      "label": "Products Section Title",
      "default": "Number of Products"
    },
    {
      "type": "text",
      "id": "products_included_text",
      "label": "Products Included Text"
    },
    {
      "type": "product",
      "id": "extra_products_product",
      "label": "Extra Products Product"
    },
    {
      "type": "text",
      "id": "extra_products_title",
      "label": "Extra Products Title",
      "default": "Extra Products"
    },
    {
      "type": "text",
      "id": "extra_products_desc",
      "label": "Extra Products Description",
      "default": "Add more curated products to your store"
    },
    {
      "type": "header",
      "content": "Right Sidebar"
    },
    {
      "type": "text",
      "id": "sales_related_text",
      "label": "Sale related text"
    },
    {
      "type": "text",
      "id": "sidebar_title",
      "label": "Side bar title",
      "default": "What you will get"
    },
    {
      "type": "select",
      "id": "source",
      "label": "Source icon",
      "default": "text",
      "options": [
        {
          "value": "text",
          "label": "Normal text"
        },
        {
          "value": "get_image",
          "label": "Use image"
        }
      ]
    },
    {
      "type": "image_picker",
      "id": "image_icon",
      "label": "Choose image",
      "info": "Only used for source image"
    },
    
    {
      "type": "text",
      "id": "sale_badge_text",
      "label": "Sale Badge Text"
    },

    {
      "type": "image_picker",
      "id": "partner_logo",
      "label": "Partner Logo"
    },
    {
      "type": "header",
      "content": "Button Text"
    },
    {
      "type": "text",
      "id": "next_button_text",
      "label": "Next Button Text",
      "default": "Next"
    },
    {
      "type": "text",
      "id": "back_button_text",
      "label": "Back Button Text",
      "default": "Back"
    },
    {
      "type": "text",
      "id": "add_to_cart_text",
      "label": "Add to Cart Button Text",
      "default": "Add to Cart"
    },
    {
      "type": "header",
      "content": "Fast Delivery Option"
    },
    {
      "type": "product",
      "id": "fast_delivery_product",
      "label": "Fast Delivery Product"
    },
    {
      "type": "text",
      "id": "fast_delivery_title",
      "label": "Fast Delivery Title",
      "default": "Fast Delivery"
    },
    {
      "type": "text",
      "id": "terms_and_conditions_applied",
      "label": "Terms and Conditions"
    }
  ],
  "presets": [
    {
      "name": "Dropshipping Funnel"
    }
  ]
}
{% endschema %}
