export const codeSnippets = [
  {
    id: "bloc-ecommerce",
    title: "OrderBloc.dart",
    language: "dart",
    label: "BLOC & Payments",
    tagline: "Event-driven checkout with Khalti & eSewa gateways",
    description:
      "Reactive order processing pipeline with immutable state emissions, optimistic updates, and integrated payment callback verification.",
    code: `import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:shoprize/domain/repositories/order_repository.dart';
import 'package:shoprize/services/payment_gateway_service.dart';

class OrderBloc extends Bloc<OrderEvent, OrderState> {
  final OrderRepository _orderRepo;
  final PaymentGatewayService _paymentService;

  OrderBloc(this._orderRepo, this._paymentService) 
      : super(const OrderState.initial()) {
    on<InitiateCheckout>(_onInitiateCheckout);
    on<VerifyPaymentCallback>(_onVerifyPayment);
  }

  Future<void> _onInitiateCheckout(
    InitiateCheckout event, 
    Emitter<OrderState> emit
  ) async {
    emit(state.copyWith(status: OrderStatus.processing));
    try {
      final order = await _orderRepo.createDraft(event.cartItems);
      
      // Dispatch gateway transaction (Khalti / eSewa)
      final txResult = await _paymentService.requestToken(
        amount: order.totalAmount,
        orderId: order.id,
        method: event.preferredGateway,
      );

      emit(state.copyWith(
        status: OrderStatus.awaitingPayment,
        activeOrder: order,
        gatewayPayload: txResult,
      ));
    } catch (e, stack) {
      emit(state.copyWith(
        status: OrderStatus.failure,
        errorMessage: e.toString(),
      ));
    }
  }
}`,
  },
  {
    id: "offline-sync",
    title: "OfflineSyncEngine.dart",
    language: "dart",
    label: "Offline-First SQLite",
    tagline: "Background data sync with WorkManager & conflict resolution",
    description:
      "Engineered for rural field operations. Writes locally to encrypted SQLite and automatically syncs changes when network connection resumes.",
    code: `import 'package:sqflite/sqflite.dart';
import 'package:workmanager/workmanager.dart';

class OfflineSyncEngine {
  final Database _db;
  final ApiClient _api;

  OfflineSyncEngine(this._db, this._api);

  Future<void> recordFieldCensus(Map<String, dynamic> survey) async {
    await _db.insert('census_records', {
      ...survey,
      'sync_status': 'PENDING',
      'created_at': DateTime.now().toIso8601String(),
      'checksum': generateSha256(survey),
    });

    // Schedule Android WorkManager / iOS BGTaskScheduler
    Workmanager().registerOneOffTask(
      "sync_\${survey['id']}",
      "syncPendingFieldData",
      constraints: Constraints(networkType: NetworkType.connected),
    );
  }

  Future<SyncReport> syncPendingRecords() async {
    final pending = await _db.query(
      'census_records',
      where: 'sync_status = ?',
      whereArgs: ['PENDING'],
      limit: 50,
    );

    for (final record in pending) {
      final res = await _api.batchUpload(record);
      if (res.isSuccess) {
        await _db.update(
          'census_records', 
          {'sync_status': 'SYNCED', 'server_id': res.remoteId},
          where: 'id = ?', 
          whereArgs: [record['id']],
        );
      }
    }
    return SyncReport(syncedCount: pending.length);
  }
}`,
  },
  {
    id: "ai-gemini",
    title: "GeminiTranslationService.dart",
    language: "dart",
    label: "Google Gemini API",
    tagline: "Streaming token translation & contextual explanations",
    description:
      "Powers JLPT and multilingual study apps with zero-latency streaming token responses and grammatical breakdown generation.",
    code: `import 'package:google_generative_ai/google_generative_ai.dart';

class GeminiTranslationService {
  final GenerativeModel _model;

  GeminiTranslationService(String apiKey)
      : _model = GenerativeModel(
          model: 'gemini-1.5-flash',
          apiKey: apiKey,
          systemInstruction: Content.system(
            'You are an expert bilingual Japanese-Nepali linguist. '
            'Break down Kanji stroke orders, JLPT N5-N1 grammar, and idioms.'
          ),
        );

  Stream<String> streamExplanations(String japaneseText, String targetLang) async* {
    final prompt = 'Analyze "$japaneseText" for JLPT level, breakdown, '
                   'and literal translation into $targetLang.';

    final response = _model.generateContentStream([Content.text(prompt)]);
    
    await for (final chunk in response) {
      if (chunk.text != null) {
        yield chunk.text!;
      }
    }
  }
}`,
  },
  {
    id: "dynamic-forms",
    title: "DynamicFormBuilder.dart",
    language: "dart",
    label: "Dynamic JSON Engine",
    tagline: "Server-driven UI rendering without app store updates",
    description:
      "Parses declarative JSON schemas from backend APIs and renders reactive, accessible Flutter form controls with live client-side validation.",
    code: `import 'package:flutter/material.dart';

class DynamicFormBuilder extends StatelessWidget {
  final Map<String, dynamic> schema;
  final void Function(Map<String, dynamic> values) onSubmit;

  const DynamicFormBuilder({
    super.key, 
    required this.schema, 
    required this.onSubmit,
  });

  @override
  Widget build(BuildContext context) {
    final List fields = schema['fields'] ?? [];

    return Form(
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.stretch,
        children: fields.map<Widget>((field) {
          switch (field['type']) {
            case 'text':
              return AppTextFormField(fieldConfig: field);
            case 'select':
              return AppDropdownField(fieldConfig: field);
            case 'date_range':
              return AppDateRangePicker(fieldConfig: field);
            case 'file_upload':
              return SecureMedicalAttachmentField(fieldConfig: field);
            default:
              return const SizedBox.shrink();
          }
        }).toList(),
      ),
    );
  }
}`,
  },
];
